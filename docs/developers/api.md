---
title: "The Pregnancy Pal API"
description: "The Pregnancy Pal REST API: base URL, the Authorization header, the data envelope, errors, cursor pagination, rate limits, and a curl example for every part of your record."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# The Pregnancy Pal API

**The API answers at one base URL, takes an [access key](./access-keys.md) as a bearer token and answers in JSON.** The full machine description is the [OpenAPI document](https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1/openapi.json); this page is the same thing for people.

```bash
BASE=https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1
PP_KEY=pp_pat_your_key_here
```

Every example below uses those two. The OpenAPI document needs no key, and neither does its Markdown copy:

```bash
curl -s "$BASE/openapi.json"
curl -s "$BASE/openapi.md"
```

## Signing requests

Send the key in the `Authorization` header:

```bash
curl -s "$BASE/appointments" -H "Authorization: Bearer $PP_KEY"
```

An assistant you connected through Pregnancy Pal's own sign-in page sends its token the same way. The API is for scripts and servers; it doesn't answer web pages on other sites.

## What comes back

One record is wrapped in `data`. A list adds `meta`:

```json
{
  "data": [
    {
      "id": "…",
      "body": "Can I keep swimming in the third trimester?",
      "created_at": "2026-11-21T08:02:11.401Z"
    }
  ],
  "meta": { "next_cursor": null, "limit": 20 }
}
```

A new record answers `201` and a change `200`, each with the record. A delete with an access key answers `204` with no body; a delete from an assistant answers `202` and waits for your yes (see [Assistants](./assistants.md#deletes-wait-for-your-yes)). Bodies you send are JSON objects with `Content-Type: application/json`, 64 KB at most. Fields you don't send on a change stay as they are.

## Errors

Every error has the same shape. `correlation_id` lets us find the request in our logs if you write to us:

```json
{
  "error": {
    "code": "invalid_token",
    "message": "The credential is missing, invalid, expired or revoked.",
    "correlation_id": "req_e179961729fddfc7"
  }
}
```

That one is real: it's what `curl -s "$BASE/readings"` answers without a key.

| Code | Status | What happened |
|---|---|---|
| `invalid_request` | 400 | A field, filter, sort, limit or cursor isn't valid. `details.issues` names the fields |
| `invalid_token` | 401 | No key, or it's mistyped, has run out, was replaced more than 24 hours ago, or was removed |
| `scope_required` | 403 | The key wasn't given this. `details.scope` names the tick it needs |
| `not_found` | 404 | Nothing at this address for this key. Someone else's record answers the same |
| `method_not_allowed` | 405 | This address doesn't do that, such as writing to the community rooms |
| `conflict` | 409 | It already exists, or a rule in your record says no; the message says which |
| `payload_too_large` | 413 | The body is over 64 KB |
| `rate_limited` | 429 | Over 120 a minute for this key, or your plan's requests a day |
| `internal` | 500 | Our side. Try again, and quote the `correlation_id` if it keeps happening |

## Pages of results

A list returns 20 records unless you ask for between 1 and 50 with `limit`. When there are more, `meta.next_cursor` holds a cursor; send it back as `cursor`, with the same `sort` and filters, for the next page. `null` means the last page. A cursor that doesn't match its query, or has run out, answers `400`: start again without it.

```bash
curl -s "$BASE/readings?limit=50&sort=occurred_at" -H "Authorization: Bearer $PP_KEY"
curl -s "$BASE/readings?limit=50&sort=occurred_at&cursor=CURSOR_FROM_META" -H "Authorization: Bearer $PP_KEY"
```

Filters are query parameters named after a field and a test, such as `day.gte=2026-11-01&day.lt=2026-12-01` or `kind.eq=kicks`. Each list below names the ones it takes and the sorts it allows; the first sort is the default.

## Rate limits

Every answer carries `RateLimit-Limit`, `RateLimit-Remaining` and `RateLimit-Reset` (seconds until that window starts again) for whichever limit is closest. A `429` adds `Retry-After`. Each key may make 120 requests a minute. Each person may make 5,000 a day on Free, 50,000 on Plus and 100,000 on Family, across every key and assistant, counted again from midnight UTC. Over the day's count, apps are asked to wait; nothing you wrote is touched.

## Your record

Dates are `YYYY-MM-DD`, times of day `HH:MM`, and moments ISO 8601 with a time zone. Fields ending in `_kg` are kilograms and `_cm` centimetres, whatever units the app shows you. `id`, `created_at` and `updated_at` are set by Pregnancy Pal and never sent.

### Pregnancy

Scopes `pregnancy:read`, `pregnancy:write`, `pregnancy:delete`. Your pregnancy as you wrote it down.

Fields: `stage` (`planning`, `pregnant` or `after`), `expected_due_date`, `last_menstrual_period`, `baby_count`, `is_high_risk` (whether your midwife or doctor called it high risk), `clinic`, `doctor`. A new one needs `stage`, `baby_count` and `is_high_risk`. Sort `-updated_at` or `updated_at`.

```bash
curl -s "$BASE/pregnancy" -H "Authorization: Bearer $PP_KEY"

curl -s -X PATCH "$BASE/pregnancy/PREGNANCY_ID" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"clinic":"Riverside Clinic"}'
```

### Periods and fertility notes

Scopes `cycle:read`, `cycle:write`, `cycle:delete`.

**Periods** (`/periods`): `start_date`, `end_date` (once it has ended), `is_active`, `notes`. A new one needs `start_date`. Filters `start_date.gte`, `start_date.lt`; sort `-start_date` or `start_date`.

**Fertility notes** (`/fertility_notes`): what you noticed on a day while planning: `day`, `temperature_c`, `mucus` (`sticky`, `creamy` or `egg_white`), `ovulation_test` (`negative` or `positive`), `note`. Written once and removed, never changed, as on the cycle page. A new one needs `day`. Filters `day.gte`, `day.lt`; sort `-day` or `day`.

```bash
curl -s "$BASE/periods?start_date.gte=2026-01-01" -H "Authorization: Bearer $PP_KEY"

curl -s -X POST "$BASE/periods" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"start_date":"2026-11-18T00:00:00Z"}'

curl -s "$BASE/fertility_notes?day.gte=2026-11-01" -H "Authorization: Bearer $PP_KEY"
```

### Readings, vitals and wellness

Scopes `readings:read`, `readings:write`, `readings:delete`.

**Readings** (`/readings`): one row per entry. `kind` is `weight`, `blood_pressure`, `symptom`, `kicks` or `contraction`; then `day`, `occurred_at`, and the fields for that kind: `weight_kg`, `systolic` and `diastolic`, `symptom` and `severity` (`mild`, `moderate` or `bad`), `kick_count`, or `duration_seconds` and `gap_seconds`. Any reading can carry a `note`. A new one needs `kind` and `day`. A contraction's length and gap are written once, as in the app. Filters `kind.eq`, `day.gte`, `day.lt`; sort `-occurred_at` or `occurred_at`.

**Vitals** (`/vitals`): the daily rows carried over from before the record moved to separate entries: `date`, `weight`, `systolic`, `diastolic`, `heart_rate`, `temperature`, `blood_sugar`, `mood` (1 to 5), `sleep_hours`, `water_glasses`, `kick_count`, `notes`. A new one needs `date` and `mood`. Filters `date.gte`, `date.lt`; sort `-date` or `date`.

**Wellness logs** (`/wellness_logs`): one row each time you pressed. `kind` is `water`, `movement`, `posture`, `eye_break` or `exercise`; then `day`, `occurred_at`, `glasses`, `times`, `exercise_slug`, `note`. Taking one back is a row of `-1`, so rows are added or removed, never changed. A new one needs `kind` and `day`. Filters `kind.eq`, `day.gte`, `day.lt`.

**Wellness days** (`/wellness_days`): how a day felt, as you scored it: `date`, `mood`, `stress_level` and `energy_level` (each 1 to 5), `sleep_hours`, `sleep_quality` (`poor`, `fair`, `good` or `excellent`), `water_glasses`, `mood_emoji`, `notes`. A new one needs `date`, `mood`, `sleep_quality`, `stress_level` and `energy_level`. Filters `date.gte`, `date.lt`.

```bash
curl -s "$BASE/readings?kind.eq=kicks&day.gte=2026-11-01" -H "Authorization: Bearer $PP_KEY"

curl -s -X POST "$BASE/readings" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"kind":"kicks","day":"2026-11-21","kick_count":10}'

curl -s -X POST "$BASE/wellness_logs" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"kind":"water","day":"2026-11-21","glasses":1}'

curl -s -X DELETE "$BASE/readings/READING_ID" -H "Authorization: Bearer $PP_KEY"
```

### Medication and doses

Scopes `medication:read`, `medication:write`, `medication:delete`.

**Medications** (`/medications`): the tablets on your list, as your doctor or midwife wrote them: `name`, `dose`, `first_time`, `second_time`, `prescribed_by`, `refill_note`, `remind`, `removed_at`. A new one needs `name`, `dose` and `first_time`. There is no delete: setting `removed_at` takes a tablet off your list, and the row stays because the doses already pressed point at it. Sort `first_time`.

**Doses** (`/doses`): each time you marked a dose taken or not taken: `medication_id`, `day`, `scheduled_time` (which of its times), `taken`, `occurred_at`, `note`. The last press on a time is what counts. A new one needs `medication_id`, `day`, `scheduled_time` and `taken`. Filters `medication_id.eq`, `day.gte`, `day.lt`.

```bash
curl -s "$BASE/medications" -H "Authorization: Bearer $PP_KEY"

curl -s -X POST "$BASE/doses" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" \
  -d '{"medication_id":"MEDICATION_ID","day":"2026-11-21","scheduled_time":"08:00","taken":true}'

curl -s -X PATCH "$BASE/medications/MEDICATION_ID" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"removed_at":"2026-11-21T10:00:00Z"}'
```

### Visits and visit questions

Scopes `visits:read`, `visits:write`, `visits:delete`.

**Visits** (`/appointments`): your visits and scans: `title`, `type` (`checkup`, `ultrasound`, `test`, `specialist` or `class`), `provider`, `location`, `date` (when it starts), `duration_minutes`, `notes`, `status` (`scheduled`, `completed`, `cancelled` or `rescheduled`), `cancellation_reason`. A cancel or a move is a change. A new one needs `title`, `type`, `date` and `duration_minutes`. Filters `date.gte`, `date.lt`; sort `date` or `-date`.

**Visit questions** (`/visit_questions`): the questions kept for your next visit, each a `body` of up to 500 characters. Written and removed, never changed.

```bash
curl -s "$BASE/appointments?date.gte=2026-11-21T00:00:00Z" -H "Authorization: Bearer $PP_KEY"

curl -s -X POST "$BASE/appointments" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title":"Booking visit","type":"checkup","date":"2026-12-03T09:30:00Z","duration_minutes":30,"location":"Riverside Clinic"}'

curl -s -X POST "$BASE/visit_questions" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"body":"Which scans are booked after week 20?"}'
```

### Food plans

Scopes `food:read`, `food:write`, `food:delete`. **Diet plans** (`/diet_plans`): `name`, `description`, `trimester` (1 to 3), `total_calories`, `is_active`, `pregnancy_profile_id`, and a daily range for each target as `target_<name>_min` and `target_<name>_max`, where the names are `calories`, `protein`, `carbohydrates`, `fat`, `fiber`, `calcium`, `iron`, `folate` and `vitamin_d`. A new plan needs `name`, `trimester`, `total_calories` and every target range. The meals inside a plan stay in the app. Sort `-updated_at` or `updated_at`.

```bash
curl -s "$BASE/diet_plans" -H "Authorization: Bearer $PP_KEY"

curl -s -X PATCH "$BASE/diet_plans/PLAN_ID" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"name":"Second trimester, vegetarian"}'
```

### Baby

Scopes `baby:read`, `baby:write`, `baby:delete`. All three are written and removed, never changed.

**Feeds** (`/baby_feeds`): `day`, `started_at`, `side` (`left` or `right`), `minutes`. All four are needed. Filters `day.gte`, `day.lt`; sort `-started_at` or `started_at`.

**Growth** (`/baby_growth`): what the clinic measured: `age_weeks`, `weight_kg`, `length_cm`. A new one needs `age_weeks` and `weight_kg`. Sort `age_weeks` or `-age_weeks`.

**Vaccinations** (`/baby_vaccinations`): what the clinic gave or booked, in the clinic's words: `visit_name`, `vaccine`, `given_on`, `status` (`given` or `booked`). A new one needs `visit_name` and `status`. We never say which vaccination is due: schedules differ by country.

```bash
curl -s "$BASE/baby_feeds?day.gte=2026-11-20" -H "Authorization: Bearer $PP_KEY"

curl -s -X POST "$BASE/baby_vaccinations" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"visit_name":"Eight-week visit","status":"booked"}'
```

### Reminders

Scopes `reminders:read`, `reminders:write`, `reminders:delete`.

**Visit reminders** (`/visit_reminders`): `appointment_id` (the visit it belongs to), `time` (when it goes off), `method` (`push`, `email` or `sms`), and `sent`, which Pregnancy Pal sets. A new one needs `appointment_id` and `time`. Sort `time` or `-time`.

**Wellness reminders** (`/wellness_reminders`): one per tracker, so its `id` is the tracker's name: `water`, `movement`, `posture` or `eye_break`. Fields `kind`, `enabled`, `from_time`, `until_time`, `every_minutes` (30, 60 or 120). A new one needs `kind`.

```bash
curl -s -X POST "$BASE/visit_reminders" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"appointment_id":"APPOINTMENT_ID","time":"2026-12-02T18:00:00Z"}'

curl -s -X PATCH "$BASE/wellness_reminders/water" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"enabled":true,"from_time":"09:00","until_time":"18:00","every_minutes":60}'
```

### Preferences

Scopes `preferences:read`, `preferences:write`. One row, which you can read and change but not add or remove: `language`, `weight_unit`, `height_unit`, `temperature_unit`, `time_zone`, the `notify_appointments`, `notify_medication`, `notify_daily_tips`, `notify_diet_reminders` and `notify_milestones` switches, `quiet_from` and `quiet_to`, `diet_tags` (any of `vegetarian`, `dairy-free`, `gluten-free`, `nut-free`) and `allergies`. The look of the app and the two AI switches, Suggestions and Speak, stay in the app.

```bash
curl -s "$BASE/preferences" -H "Authorization: Bearer $PP_KEY"

curl -s -X PATCH "$BASE/preferences/PREFERENCES_ID" -H "Authorization: Bearer $PP_KEY" \
  -H "Content-Type: application/json" -d '{"quiet_from":"22:00","quiet_to":"07:00"}'
```

## Shared with other people, read only

These answer `GET` only. Writing to them answers `405`, whatever the key can do.

**Partner view** (`/partner_view`, scope `partner:read`): what a partner shares with you, only the parts they switched on and only while they share: `active`, `owner_name`, and the `visits`, `kicks`, `meds` and `symptoms` lists. It's exactly what the partner page shows you in the app.

**Partner link** (`/partner_link`, scope `partner:read`): whether the partner you invited has accepted: `state` (`pending`, `accepted`, `revoked` or `taken_back`), `invited_at`, `accepted_at`, `closed_at`, `expires_at`. The invited address and the invite itself stay out.

**Community rooms** (scope `rooms:read`): `/rooms` with `name`, `description`, `category`, `members` (a count) and `joined`; `/room_posts` with `author_name` (first name), `author_week`, `body`, `tags` and `mine`, filter `room_id.eq`, newest first; `/room_replies`, filter `post_id.eq`, oldest first.

```bash
curl -s "$BASE/partner_view" -H "Authorization: Bearer $PP_KEY"

curl -s "$BASE/room_posts?room_id.eq=ROOM_ID&limit=10" -H "Authorization: Bearer $PP_KEY"
```

## Calendar events

`/calendar` (scope `visits:read`) lists what a calendar feed would show, as events with `part` (`visits`, `meds`, `due` or `reminders`), `title`, `starts_at` and `ends_at`, earliest first. A key sees only the parts its scopes reach. To put them in a calendar app, use a [calendar feed](./calendar-feed.md).

```bash
curl -s "$BASE/calendar" -H "Authorization: Bearer $PP_KEY"
```
