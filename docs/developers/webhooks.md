---
title: "Webhooks"
description: "Pregnancy Pal webhooks: every event and the short payload it sends, the optional payload with what was written, Standard Webhooks verification in Node and Python, retries, and turning an address off."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Webhooks

**Pregnancy Pal sends a short signed message to your server each time something you choose happens in your record.** By default the message says what happened, its id and when. What you wrote stays in your record, and your server reads it with an [access key](./access-keys.md) if it needs it.

## Adding an address

In **Account**, open [**Other apps**](https://pregnancypal.aoneahsan.com/profile/other-apps), then **Webhooks**, and press **Add an address**.

- **Where we send it.** An `https://` address on the public internet. We refuse plain `http://`, a name and password inside the address, ports other than 443 and 8443, private networks, and Pregnancy Pal's own addresses.
- **When to send.** Tick the events you want, at least one.
- **Include what was written.** Off unless you turn it on. See [the two kinds of payload](#what-a-delivery-carries).

The signing secret shows once, when the address is added; it starts with `whsec_`. We email you each time an address is added.

3 addresses on Free, 20 on Plus and 40 on Family.

## Events

| Event | When |
|---|---|
| `pregnancy.updated` | Due date, stage or details changed |
| `period.logged` · `period.updated` · `period.deleted` | A period written down, changed or removed |
| `fertility.noted` · `fertility.deleted` | A fertile-day note added or removed |
| `reading.logged` · `reading.updated` · `reading.deleted` | Weight, blood pressure, a symptom, kicks or a contraction, or a daily vitals row, written down, corrected or removed |
| `wellness.logged` · `wellness.updated` · `wellness.deleted` | Water, movement, posture, an eye break, exercise or a day's scores written down, changed or removed |
| `medication.added` · `medication.updated` · `medication.removed` | A tablet added to your list, a dose or time changed, taken off your list |
| `medication.logged` | A dose marked as taken or not taken |
| `appointment.created` · `appointment.updated` · `appointment.deleted` | A visit booked; changed, moved or cancelled; removed |
| `diet_plan.created` · `diet_plan.updated` · `diet_plan.deleted` | A food plan made, changed or removed |
| `baby.logged` · `baby.deleted` | A feed, a growth measurement or a vaccination written down or removed |
| `reminder.set` · `reminder.changed` · `reminder.removed` | A visit or wellness reminder set, its time changed, or removed |
| `partner.linked` · `partner.unlinked` | Your partner accepted the invite; sharing ended |
| `webhook.test` | You pressed **Send a test event** |

A change is only sent when something you wrote changed, not when a row is merely saved again.

## What a delivery carries

Every delivery is a `POST` with a JSON body of `type`, `timestamp` and `data`.

**With Include what was written off**, `data` holds only the record's `id`, its `kind` and the moment it happened:

```json
{
  "type": "appointment.created",
  "timestamp": "2026-11-21T09:12:04.118Z",
  "data": {
    "id": "6f1d2c9e-41b8-4a57-9c3e-2b7a0d5e8f14",
    "kind": "checkup",
    "occurred_at": "2026-11-21T09:12:04.118412+00:00"
  }
}
```

`kind` tells records of one event apart:

| Event family | `kind` |
|---|---|
| `reading.*` | the reading's kind (`weight`, `blood_pressure`, `symptom`, `kicks`, `contraction`), or `vitals` for a daily vitals row |
| `wellness.*` | the tracker (`water`, `movement`, `posture`, `eye_break`, `exercise`), or `day` for a day's scores |
| `appointment.*` | the visit's type (`checkup`, `ultrasound`, `test`, `specialist`, `class`) |
| `baby.*` | `feed`, `growth` or `vaccination` |
| `reminder.*` | `visit`, or the tracker for a wellness reminder |
| `medication.*` | `medication` |
| `period.*`, `fertility.*`, `pregnancy.updated`, `diet_plan.*`, `partner.*` | `period`, `fertility`, `pregnancy`, `diet_plan`, `partner` |

**With Include what was written on**, `data` also holds the same fields the [API](./api.md) returns for that record, no more:

```json
{
  "type": "appointment.created",
  "timestamp": "2026-11-21T09:12:04.118Z",
  "data": {
    "id": "6f1d2c9e-41b8-4a57-9c3e-2b7a0d5e8f14",
    "kind": "checkup",
    "occurred_at": "2026-11-21T09:12:04.118412+00:00",
    "title": "Booking visit",
    "type": "checkup",
    "provider": "Riverside Midwives",
    "location": "Riverside Clinic",
    "date": "2026-12-03T09:30:00+00:00",
    "duration_minutes": 30,
    "notes": null,
    "status": "scheduled",
    "cancellation_reason": null,
    "created_at": "2026-11-21T09:12:04.118412+00:00",
    "updated_at": "2026-11-21T09:12:04.118412+00:00"
  }
}
```

For a reading, a wellness log or a dose, `occurred_at` in this version is the record's own time. A deleted record sends what it held when it was removed.

Turning it on needs a sign-in from the last 10 minutes, with the six digits when [two-step sign-in](./two-step-sign-in.md) is on. From then on, the readings, names and notes you write leave for that address, so anyone who can see your server's logs can see them. You can turn it off again at any time.

`webhook.test` carries `{ "message": "Test event" }` as its `data`.

## Checking a delivery came from us

Deliveries are signed the [Standard Webhooks](https://www.standardwebhooks.com/) way. Each carries three headers:

| Header | |
|---|---|
| `webhook-id` | The message id, such as `msg_…`. The same on every retry and on Send again, so you can skip one you've seen |
| `webhook-timestamp` | When this attempt was signed, in seconds since 1970 |
| `webhook-signature` | `v1,` and a base64 HMAC-SHA256 of `id.timestamp.body`, keyed with your secret without its `whsec_` and base64-decoded. During a secret change it holds two, separated by a space |

Check the signature against the **raw body exactly as received**, before any JSON parsing, and refuse a timestamp more than five minutes from your clock.

### Node

```js
import { createHmac, timingSafeEqual } from 'node:crypto';

const TOLERANCE_SECONDS = 300;

export function verifyPregnancyPal(secret, headers, rawBody) {
  const id = headers['webhook-id'];
  const timestamp = headers['webhook-timestamp'];
  const signatures = headers['webhook-signature'];
  if (!id || !timestamp || !signatures) return false;
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > TOLERANCE_SECONDS) return false;

  const key = Buffer.from(secret.replace(/^whsec_/, ''), 'base64');
  const expected = createHmac('sha256', key).update(`${id}.${timestamp}.${rawBody}`).digest();

  return signatures.split(' ').some((entry) => {
    const [version, value] = entry.split(',');
    if (version !== 'v1' || !value) return false;
    const given = Buffer.from(value, 'base64');
    return given.length === expected.length && timingSafeEqual(given, expected);
  });
}
```

With Express, read the body raw on that route, `express.raw({ type: 'application/json' })`, and pass `req.body.toString('utf8')`.

### Python

```python
import base64
import hashlib
import hmac
import time

TOLERANCE_SECONDS = 300


def verify_pregnancy_pal(secret: str, headers: dict, raw_body: bytes) -> bool:
    msg_id = headers.get("webhook-id")
    timestamp = headers.get("webhook-timestamp")
    signatures = headers.get("webhook-signature")
    if not msg_id or not timestamp or not signatures:
        return False
    if abs(time.time() - int(timestamp)) > TOLERANCE_SECONDS:
        return False

    key = base64.b64decode(secret.removeprefix("whsec_"))
    signed = f"{msg_id}.{timestamp}.".encode() + raw_body
    expected = base64.b64encode(hmac.new(key, signed, hashlib.sha256).digest()).decode()

    for entry in signatures.split(" "):
        version, _, value = entry.partition(",")
        if version == "v1" and hmac.compare_digest(value, expected):
            return True
    return False
```

With Flask, pass `request.get_data()` and `request.headers`.

## Answering, retries and turning off

Answer with any `2xx` within 10 seconds and the delivery is done. Anything else, or no answer, is tried again: 5 seconds later, then 5 minutes, 30 minutes, 2 hours, 5 hours, 10 hours and 10 hours, eight tries in about 27 hours. After the last, the delivery shows as failed in the log.

An address that fails without a break for 5 days is turned off, and so is one that answers `410 Gone`, at once. We email you when it happens. **Turn back on** starts sending again; missed events aren't sent, so use **Send again** in the log for any you need. It goes with the same `webhook-id`.

Every delivery carries the `User-Agent` `PregnancyPal-Webhooks/1.0`.

## Managing an address

- **What we sent** lists each delivery with its id, when, and how your address answered.
- **Send a test event** sends `webhook.test` now.
- **Pause** stops sending until you press **Resume**.
- **Show the signing secret** needs a sign-in from the last 10 minutes, with the six digits when two-step sign-in is on.
- **Replace the secret** gives a new one. For 24 hours we sign with both, so your server keeps working while you swap it in.
- **Remove**, then press again: nothing more is sent.
