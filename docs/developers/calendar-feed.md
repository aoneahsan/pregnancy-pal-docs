---
title: "Calendar feed"
description: "Show your Pregnancy Pal visits, medication times, due date and visit reminders in Google Calendar or on an iPhone, with plain titles or the names in your record."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Calendar feed

**A calendar feed is a private address your calendar app subscribes to.** It checks the address now and then and shows what's in it: the parts of your record you chose, and nothing else. The feed only reads; nothing in your calendar changes your record.

## Making a feed

In **Account**, open [**Other apps**](https://pregnancypal.aoneahsan.com/profile/other-apps), then **Calendar feed**, and press **Make a feed**. It asks two things.

**What goes in.** Any of:

- Visits and scans
- Medication times
- Your due date
- Visit reminders

**What each event says.**

- **Just "Pregnancy Pal" and the time.** Every event is titled Pregnancy Pal.
- **The names in your record**, like "Glucose test".

Calendars are often shared with family or work. Plain titles keep what each one is between you and your record.

The address shows once, when the feed is made. Anyone who has it can see what's in the feed, so keep it to your own calendar. We email you that a feed was made and what it shows.

## Adding it to your calendar

- **Google Calendar:** Other calendars, then **From URL**, and paste the address.
- **iPhone:** Settings, Calendar, Accounts, Add Account, Other, **Add Subscribed Calendar**, and paste the address.

The feed holds events from 90 days back to about 400 days ahead. Calendar apps decide how often they check, so a change can take a while to show.

## Changing or removing a feed

You can change what a feed shows and how its events are titled at any time; the address stays the same.

**Show the address** shows it again within 10 minutes of a sign-in, with the six digits when [two-step sign-in](./two-step-sign-in.md) is on.

**Remove**, then press again, and the calendar stops updating. It keeps what it already had until it next checks.

## How many you can have

2 feeds on Free, 10 on Plus and 20 on Family.

For the same events in a script, use the [`/calendar` endpoint](./api.md#calendar-events) with an access key.
