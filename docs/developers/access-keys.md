---
title: "Access keys"
description: "Make a Pregnancy Pal access key that reads, changes or deletes only the parts of your record you tick, show it again, replace it with a day's overlap, or remove it."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Access keys

**An access key lets a tool you run yourself use your record through [the API](./api.md).** It reaches only the parts you tick, and it works like a password, so keep it out of anything you share. Keys start with `pp_pat_`.

## Making a key

1. In **Account**, open [**Other apps**](https://pregnancypal.aoneahsan.com/profile/other-apps) and press **Make a key**.
2. Say what it's for, such as "Kick count on my watch". Only you see the name.
3. Tick **Read**, **Change** or **Delete** for each part it needs. Delete is off unless you tick it.
4. Choose when it runs out: **30 days**, **90 days**, **365 days** or **Never**.
5. Copy the key into your tool. This is the one time it shows without asking.

**Never is only for a key that reads.** A key that can change or delete always runs out; untick Change and Delete to keep one for good.

We email you each time a key is made. The key itself is never emailed.

You can't widen a key later. Make a new one with the parts you need, and remove the old one.

## What each tick reaches

| Part | Read | Change | Delete |
|---|---|---|---|
| Pregnancy | `pregnancy:read` | `pregnancy:write` | `pregnancy:delete` |
| Periods and cycles | `cycle:read` | `cycle:write` | `cycle:delete` |
| Readings and wellness | `readings:read` | `readings:write` | `readings:delete` |
| Medication | `medication:read` | `medication:write` | `medication:delete` |
| Visits | `visits:read` | `visits:write` | `visits:delete` |
| Food plans | `food:read` | `food:write` | `food:delete` |
| Baby | `baby:read` | `baby:write` | `baby:delete` |
| Reminders | `reminders:read` | `reminders:write` | `reminders:delete` |
| Preferences | `preferences:read` | `preferences:write` | |
| Shared with you by a partner | `partner:read` | | |
| Community rooms | `rooms:read` | | |

The last two are read only, whatever else the key can do. Which records sit under each part is on [the API page](./api.md).

## Showing a key again

Press **Show the key**. It shows only if you signed in within the last 10 minutes; otherwise Pregnancy Pal asks you to choose your Google account again and brings you straight back. With [two-step sign-in](./two-step-sign-in.md) on, it asks for the six digits too, even on a browser that skips the code.

## Replacing a key

Press **Replace**. You get a new key at once, and the old one keeps working for 24 hours, so you have time to swap it in. Then it stops. The new key has the same name and ticks, and runs out after 90 days; a read-only key that never ran out gets one that never runs out either. Getting it needs the same fresh sign-in as showing it.

## Removing a key

Press **Remove**, then press again. It stops working straight away.

## Checking what a key can do

```bash
curl -s "https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1/token" \
  -H "Authorization: Bearer $PP_KEY"
```

The answer names the kind of credential and its scopes:

```json
{
  "data": {
    "kind": "pat",
    "user_id": "…",
    "client_id": null,
    "scopes": ["visits:read", "visits:write"]
  }
}
```

## How many you can have

5 keys on Free, 25 on Plus and 50 on Family. Every key in your list counts, including one that has run out, until you remove it. Replacing a key works even when you're at the limit.
