---
sidebar_position: 1
title: Push Notifications in PregnancyPal — Enable, Test & Status
description: Turn on push notifications in PregnancyPal for gentle reminders and tips. Enable permission, send a test, and read your status badge — reminders only, never alerts.
keywords:
  - PregnancyPal push notifications
  - pregnancy app reminders
  - enable push notifications pregnancy
  - OneSignal pregnancy app
  - notification permission
  - test notification
tags:
  - notifications
  - reminders
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Push notifications

> **Push notifications** in PregnancyPal are opt-in reminders and tips that the app can send to your device — turned on with a single Enable button after you grant permission, and confirmed with a "Test notification" button and a live status badge.

Pregnancy is busy. It is easy to forget to log a blood-pressure reading, miss a milestone you wanted to celebrate, or lose track of when your next appointment is. Push notifications are PregnancyPal's gentle way of nudging you — short, optional reminders that show up on your phone so you do not have to keep the app open or remember everything yourself.

Push is completely optional. You decide whether to turn it on, which kinds of reminders you want, and when they are allowed to reach you. Nothing is enabled until you ask for it.

## What you can do with push notifications

- **Enable push with one button** in your preferences, which asks your device for permission.
- **Send a "Test notification"** to confirm everything is wired up correctly before you rely on it.
- **Read a status badge** that tells you the current state — Enabled, Blocked, or Not Supported.
- **See a platform badge** showing which platform the app detected (so you know how push is being delivered).
- **Receive reminders and tips** for the categories you choose (see [Notification preferences](./preferences)).
- **Get reliable delivery on the Android app**, where push is sent through OneSignal.

## How to enable push notifications

1. **Open your preferences**: Profile → Preferences (`/profile/preferences`).
2. **Find the Push Notifications section** near the top of the notifications area.
3. **Tap Enable**: PregnancyPal asks your browser or mobile device for notification permission.
4. **Allow permission** in the system prompt that appears. If you tap "Block" or "Don't allow", the status badge will read **Blocked** and push will not be delivered until you re-allow it in your device or browser settings.
5. **Send a test**: Tap **Test notification**. A sample notification should appear on your device within a few seconds.
6. **Check the status badge**: Confirm it reads **Enabled**. The platform badge next to it shows the platform PregnancyPal detected.

## Examples

- **Setting it up on the Android app** — You open Preferences, tap Enable, and Android shows its permission prompt. You allow it, tap Test notification, and a sample reminder slides in from OneSignal. The status badge turns to **Enabled**. From now on, the categories you keep switched on can reach you.
- **A blocked browser** — On a desktop browser you previously denied notifications, the badge reads **Blocked**. The Enable button cannot override a browser-level block, so you open the browser's site settings, switch notifications back to "Allow", and reload the page. The badge then updates to **Enabled**.
- **An unsupported environment** — On a browser or device that has no push support at all, the badge reads **Not Supported**. PregnancyPal is honest about this rather than pretending push is working — the in-app experience still works fully, you just will not receive device notifications there.

## Tips

- **Always send a test after enabling.** The Test notification button is the quickest way to confirm reminders will actually arrive, instead of finding out later that a reminder never came.
- **Use the Android app for the most reliable reminders.** Push on the Android app is delivered through OneSignal, which is the dependable channel; web push depends heavily on your specific browser and operating system.
- **If the badge says Blocked, fix it at the system level.** A block is set by your browser or device, not by PregnancyPal, so you re-allow it in your browser or phone settings, then reload.
- **Pair push with quiet hours.** Turn on [quiet hours](./quiet-hours) so wellness reminders are suppressed overnight while you sleep.
- **Pick your categories deliberately.** You do not have to receive everything — choose only the reminder types you find useful in [Notification preferences](./preferences).

## Frequently asked questions

### Why does my status badge say "Blocked"?

Because notification permission was denied at the browser or device level — either you tapped "Block"/"Don't allow" earlier, or your system settings disallow notifications for PregnancyPal. The in-app Enable button cannot override a system block, so you change it in your browser's site settings or your phone's app settings, then reload the app.

### What does "Not Supported" mean?

It means the browser or device you are using does not offer push notifications at all. Web push support varies a lot between browsers and operating systems. When push is not available, PregnancyPal shows this honestly instead of failing silently. Everything else in the app still works.

### How is push delivered on the Android app?

On the Android app, push notifications are delivered through OneSignal, which is the reliable delivery channel. That is why the Android app is the best place to depend on reminders.

### Does the Test notification button send anything to anyone else?

No. It sends a single sample notification to your own device so you can confirm the setup is working. It is not shared with anyone.

### Will turning on push send me lots of notifications?

Only for the categories you keep switched on. You control which reminder types are active in [Notification preferences](./preferences), and you can keep your overnight hours quiet with [quiet hours](./quiet-hours).

### Can PregnancyPal notify me about a medical problem?

No. Notifications are reminders and tips only — for example, a nudge to log a reading or a celebration of a milestone. They are never medical alerts and never tell you to take a clinical action.

## What this feature does NOT do

- **Does not send medical alerts.** Every notification is a reminder or a tip — it will never warn you about a medical condition, a vital-sign reading, or anything clinical.
- **Does not guarantee delivery on every browser.** Web push support varies by browser and operating system; some environments show "Not Supported". The Android app's OneSignal channel is the reliable one.
- **Does not override a system block.** If your browser or device has blocked notifications, you must re-allow them in your system settings — the app cannot force them on.
- **Does not monitor you in the background.** Push is a one-way reminder channel, not a health-monitoring or emergency service.

**Push notifications are convenience reminders, not a safety net. They are not medical advice and cannot detect or respond to a medical emergency. For anything concerning your health or your baby's health, contact your healthcare provider or local emergency services directly.**

## Related

- [Notification preferences](./preferences)
- [Quiet hours](./quiet-hours)
- [Appointment reminders](../appointments/reminders)
- [Milestones](../pregnancy-tracking/milestones)
- [Blood pressure tracking](../tracking/blood-pressure)
- [Dashboard](../dashboard)
- [Dashboard tour](../../getting-started/dashboard-tour)
- [Welcome to PregnancyPal](../../intro)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
