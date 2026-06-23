---
sidebar_position: 1
title: "PregnancyPal FAQ: Cost, Platforms, Privacy & Your Data"
description: Answers to the most common PregnancyPal questions — is it free, what platforms it runs on, how sign-in works, where your data lives, and how to delete it.
keywords:
  - PregnancyPal FAQ
  - is PregnancyPal free
  - PregnancyPal platforms
  - pregnancy app data privacy
  - delete pregnancy app account
  - pregnancy app sign in
tags:
  - help
  - faq
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Frequently asked questions

> **PregnancyPal FAQ** — quick, honest answers to the questions people ask most before and after they start using the app.

Have a question about PregnancyPal? You're probably not the only one. This page collects the questions we hear most often — about cost, devices, sign-in, your data, and the help you can expect. We've kept the answers plain and honest, including the parts where the answer is "no" or "not yet."

If your question isn't here, the in-app help center at [pregnancypal.aoneahsan.com/faq](https://pregnancypal.aoneahsan.com/faq) has more, and you can always reach a human through [contact support](./contact-support).

## Frequently asked questions

### Is PregnancyPal free?

Yes. PregnancyPal is free to use. It's built on a zero-cost, client-side architecture — there's no paid backend server and no expensive cloud functions running behind the scenes — which keeps the app sustainable to offer without charging you. There are no premium tiers gating the core tracking, tools, or content. If that ever changes, it would be communicated clearly inside the app first.

### What platforms does PregnancyPal run on?

Two places today:

- **Web** — open [pregnancypal.aoneahsan.com](https://pregnancypal.aoneahsan.com) in any modern browser on a phone, tablet, or computer.
- **Android** — install from Google Play (package `com.aoneahsan.pregnancypal`).

There is **no native iOS app yet**. If you use an iPhone or iPad, open the web app in Safari — it works the same way and you can add it to your Home Screen for an app-like shortcut. See [installation](../getting-started/installation) for the steps.

### How do I sign in?

You sign in with your **Google account**. Tap "Sign in with Google," choose the account you want to use, and you're in. There's no separate PregnancyPal password to remember, which means one less credential to manage and lose. If sign-in doesn't work, the [troubleshooting](./troubleshooting) page walks through the usual causes (pop-up blockers, wrong account, etc.).

### Is my data private, and where is it stored?

Your personal data lives in your own account. Specifically, your tracking entries, profile, and app data are stored in **Firebase Firestore** (a cloud database), and any files or images you add are stored in **FilesHub**. PregnancyPal also uses a handful of services to keep the app working and improving: **OneSignal** (push notifications), **Amplitude** (product analytics), **Sentry** (crash and error reporting), and **Yandex Metrica** plus **Microsoft Clarity** (usage analytics — these two may share usage data with those third parties). On Android, the app declares the Advertising ID for analytics.

We don't make HIPAA, "end-to-end encryption," or "100% secure" claims, because those would be overclaiming. For the full plain-language picture, read the [privacy summary](../legal/privacy) and [how your data is handled](../legal/data-handling). The binding document is the app's own privacy policy at [pregnancypal.aoneahsan.com/privacy](https://pregnancypal.aoneahsan.com/privacy).

### Can I export my data?

Yes. You can download a copy of your health data as a **PDF Health Report** — it pulls together your vitals, appointments, weight, mood, and symptoms into one document you can save, print, or bring to an appointment. This is handy for sharing a snapshot with your healthcare provider.

### How do I delete my account?

You can delete your account from inside the app. When you do, your personal data is removed immediately. An encrypted backup is kept for about **30 days** and then automatically purged, and anonymized analytics data may be retained (it can no longer be tied back to you). The canonical place to do this is the [delete-account page](../features/account/delete-account), which mirrors the app's `/delete-account` flow.

### Is anything in PregnancyPal medical advice?

No. PregnancyPal is an educational and organizational companion. It helps you learn, track, and stay organized through pregnancy and trying-to-conceive — but it does **not** diagnose conditions, treat anything, predict outcomes, or replace your prenatal care.

### Does PregnancyPal work offline?

PregnancyPal needs an internet connection to sync your data with the cloud database (Firestore). Some recently viewed content may still appear from your device's local cache, but saving new entries and loading fresh data requires a connection. If something looks empty or won't save while you're offline, that's expected — reconnect and it will sync. The [troubleshooting](./troubleshooting) page covers this.

### Will I get reminders and notifications?

Yes, if you allow them. Push notifications are delivered through OneSignal and are most reliable on the **Android app**. On the web, notification support depends on your browser and whether you've granted permission. You control what you receive and when through your notification preferences. See [push notifications](../features/notifications/push) for details.

### Who built PregnancyPal, and how do I get help?

PregnancyPal is built and maintained by Ahsan Mahmood — read more on the [credits](../about/credits) page. For help, use the in-app [contact support](./contact-support) options or email the developer directly. Because it's a solo-built product, please be patient with response times.

## What this feature does NOT do

This FAQ is a general help resource. It does **not** give medical guidance, and the app it describes does **not** diagnose, treat, or monitor any pregnancy or fertility condition. PregnancyPal organizes and educates; it does not replace prenatal care.

**Always consult your doctor, midwife, or another qualified healthcare professional for any medical questions or concerns. Nothing in PregnancyPal or this documentation is medical advice.**

## Related

- [Troubleshooting common problems](./troubleshooting)
- [Contact support](./contact-support)
- [Sign up and get started](../getting-started/sign-up)
- [Install on your device](../getting-started/installation)
- [Privacy summary](../legal/privacy)
- [Delete your account](../features/account/delete-account)
- [Glossary of terms](../about/glossary)
- [Introduction to PregnancyPal](../intro)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
