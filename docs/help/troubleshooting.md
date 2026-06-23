---
sidebar_position: 2
title: "PregnancyPal Troubleshooting: Sign-in, Sync & Notifications"
description: Fix common PregnancyPal problems — can't sign in, notifications not arriving, data not loading or saving, the app looks wrong, or nothing works offline.
keywords:
  - PregnancyPal troubleshooting
  - pregnancy app won't load
  - PregnancyPal sign in problem
  - notifications not working
  - pregnancy app offline
  - data not saving
tags:
  - help
  - troubleshooting
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Troubleshooting

> **Troubleshooting** — a problem-by-problem guide to the most common PregnancyPal hiccups, with the likely cause and the steps to fix each one.

Most PregnancyPal issues come down to a few familiar culprits: a blocked sign-in pop-up, a missing notification permission, or simply being offline when the app needs to sync. This page walks through each one. Find your problem below, check the likely cause, then follow the steps.

If none of these resolve it, reach out through [contact support](./contact-support) — and see the bottom of this page for what to include so we can help faster.

## I can't sign in

**Likely cause:** PregnancyPal uses Google sign-in, so problems usually trace back to a blocked pop-up, the wrong Google account, or a browser that's interrupting the flow.

**Steps to fix:**

1. **Allow pop-ups** for `pregnancypal.aoneahsan.com`. Sign-in opens a Google window; if your browser blocks pop-ups, it can fail silently. Look for a blocked-pop-up icon in the address bar and allow it, then try again.
2. **Pick the right account.** If you have several Google accounts, make sure you choose the one you intend to use with PregnancyPal. Signing in with a different account creates a separate, empty profile.
3. **Disable interfering extensions.** Strict privacy or script-blocking extensions can break the Google sign-in handshake. Temporarily disable them, or try an incognito/private window.
4. **Use the Android app.** If web sign-in keeps failing, the Android app handles Google sign-in natively and is often smoother.
5. **Check your connection.** Sign-in needs internet. A weak or captive-portal Wi-Fi connection (like a coffee-shop login page) can interrupt it.

## Notifications aren't arriving

**Likely cause:** Notification permission was never granted or was denied, you're inside a quiet-hours window, or you're on a browser with limited push support.

**Steps to fix:**

1. **Grant permission.** Check that you allowed notifications when prompted. On Android, open your device Settings → Apps → PregnancyPal → Notifications and make sure they're on. In a browser, check the site permissions for `pregnancypal.aoneahsan.com`.
2. **Check quiet hours and preferences.** If you've set quiet hours or turned specific reminders off in your notification preferences, those won't fire. Review your [push notification](../features/notifications/push) settings.
3. **Prefer the Android app for reliability.** Push is delivered through OneSignal and is **most reliable on the Android app**. Web push depends on your browser and operating system, and some browsers (especially on iOS) limit or don't support it.
4. **Don't force-stop the app.** On some Android phones, aggressive battery optimization or force-stopping the app can suppress notifications. Allow PregnancyPal to run in the background.

## Data isn't loading or saving

**Likely cause:** PregnancyPal needs an internet connection to sync with its cloud database (Firestore). Without one, new entries can't save and fresh data can't load.

**Steps to fix:**

1. **Check your internet.** Open another site or app to confirm you're online. PregnancyPal reads and writes to the cloud, so a dropped connection stops both.
2. **Wait for the sync, then refresh.** If you just made an entry, give it a moment and reload the page or reopen the app.
3. **Confirm you're signed in.** If your session expired, the app may show empty data. Sign in again with the same Google account.
4. **Try again on a stronger connection.** Captive portals, VPNs, or strict firewalls can block the database connection even when you appear "online."

## The app looks wrong or broken

**Likely cause:** A stale page, an interrupted load, or a theme/appearance setting that doesn't match what you expect.

**Steps to fix:**

1. **Refresh.** A hard refresh (or closing and reopening the app) clears a half-loaded screen more often than anything else.
2. **Check your theme/appearance setting.** If colors look off, you may have a light/dark mode set that differs from your device. Open settings and switch appearance to match.
3. **Update the app or browser.** On Android, make sure you're on the latest version from Google Play. On the web, an outdated browser can render layouts incorrectly.
4. **Clear the local cache.** As a last resort, clear the site data for `pregnancypal.aoneahsan.com` (or the app's cache) and sign in again. Your data lives in your account, so it re-downloads.

## Nothing happens when I'm offline

**Likely cause:** This is expected behavior, not a bug.

**Steps to fix:**

PregnancyPal is an online app — it syncs your information with the cloud, so it needs a connection to load fresh data and to save new entries. Some recently viewed content may appear from your device's local cache, but full functionality returns only when you're back online. If you tried to log something offline and it didn't stick, reconnect and re-enter it.

## Frequently asked questions

### Why does the app sometimes log me out?

Sessions can expire, or signing in on a different device/account can shift things. Just sign in again with your usual Google account — your data is tied to the account, not the session.

### I deleted my account by mistake. Can I recover it?

Deletion removes your personal data immediately. An encrypted backup is kept for about 30 days before being auto-purged, so recovery is not guaranteed — contact support quickly if this was a mistake. See the [delete-account](../features/account/delete-account) page.

### A feature isn't showing for me.

Make sure the app is up to date and that you're signed in. If a feature still doesn't appear, mention exactly which one when you [contact support](./contact-support).

## What this feature does NOT do

Troubleshooting fixes app behavior — it does **not** address medical questions, and the app itself does **not** diagnose, treat, or monitor any pregnancy or health condition. PregnancyPal helps you stay organized and informed; it is not a substitute for professional care.

**For any health concern — not just app glitches — please consult your doctor, midwife, or another qualified healthcare professional. PregnancyPal and this documentation do not provide medical advice.**

## Related

- [Frequently asked questions](./faq)
- [Contact support](./contact-support)
- [Push notifications](../features/notifications/push)
- [Sign up and get started](../getting-started/sign-up)
- [Install on your device](../getting-started/installation)
- [Delete your account](../features/account/delete-account)
- [Privacy summary](../legal/privacy)
- [Introduction to PregnancyPal](../intro)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
