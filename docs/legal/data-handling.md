---
sidebar_position: 3
title: "PregnancyPal Data Handling — Storage, Security & Retention"
description: How PregnancyPal stores and protects your data — Firestore, FilesHub, local cache, encryption in transit, deletion and retention, and the Android Advertising ID.
keywords:
  - PregnancyPal data handling
  - where is pregnancy data stored
  - Firestore data storage
  - data retention pregnancy app
  - encryption in transit
  - Android advertising ID
tags:
  - legal
  - data
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# How your data is handled

> **Data handling** — a plain-language explanation of where PregnancyPal keeps your information, how it's protected, and what happens to it when you delete your account.

This page is the practical companion to the [privacy summary](./privacy): it focuses on *where* your data lives and *what happens to it* over time. We've kept it honest and specific, without overstating the protections in place.

**This is a plain-language summary.** The binding documents are the app's own [privacy policy](https://pregnancypal.aoneahsan.com/privacy) and [terms](https://pregnancypal.aoneahsan.com/terms).

## Where your data is stored

PregnancyPal uses a zero-cost, client-side architecture — there's no custom paid backend server in the middle. Your data lives in a few clear places:

- **Firestore (cloud database)** — your account data and the things you track (vitals, weight, mood, symptoms, appointments, and so on) are stored in Firebase Firestore, tied to your account. This is the source of truth that syncs across your devices when you sign in.
- **FilesHub (file storage)** — any images or documents you upload are stored in FilesHub.
- **Local cache on your device** — to make the app responsive, some recently used data may be cached locally on the device you're using. This is why the app needs an internet connection to load fresh data and save new entries — the cloud database is where things actually persist.

## How your data is protected

- **Encryption in transit** — the connection between your device and the services PregnancyPal uses is encrypted, which protects your data while it travels over the network.
- **Account-scoped access** — your entries are tied to your Google-authenticated account.
- **No overclaiming** — we deliberately do **not** claim "HIPAA compliance," "end-to-end encryption," or that anything is "100% secure." No online service can honestly promise perfect security, and we won't pretend otherwise. The binding privacy policy describes the safeguards in place.

## Analytics and the Android Advertising ID

To understand how the app is used and to catch problems, PregnancyPal uses analytics and diagnostics services: **Amplitude** (product analytics), **Sentry** (crash/error reporting), and **Yandex Metrica** plus **Microsoft Clarity** (usage analytics, which may share usage data with those third parties). On **Android**, the app declares the **Advertising ID** so analytics can function. This is disclosed here and in the app's data-safety information so there are no surprises.

## Deletion and retention

When you delete your account from inside the app:

1. **Your personal data is removed immediately** from your active account.
2. **An encrypted backup is kept for about 30 days**, then automatically purged. This short window exists for safety and recovery; after it, the backup is gone.
3. **Anonymized analytics may be retained.** This data can no longer be tied back to you as an individual.

The canonical place to do this is the [delete-account](../features/account/delete-account) page (mirroring the app's `/delete-account` flow). You don't need to contact anyone to delete your account — it's self-service. If you'd like a copy of your information first, generate the [Health Report PDF](../features/account/data-export) before you delete.

## Frequently asked questions

### Does my data sync across devices?

Yes — because it lives in the cloud database tied to your account, signing in on another device (or the Android app and web) brings the same data with you.

### Why does the app need internet?

Because the durable copy of your data lives in Firestore. The local cache makes the app feel fast, but new entries are saved to the cloud, which needs a connection.

### Can I get my data out?

Yes. The **Health Report PDF** compiles your vitals, appointments, weight, mood, and symptoms into one document — see [export your data](../features/account/data-export).

### Is the 30-day backup something I can access?

No — the encrypted backup is an internal safety measure, not a user-restorable archive, and it's auto-purged after about 30 days. If you want your own copy, export the Health Report before deleting.

### Who are all these third-party services?

They're listed openly in the [privacy summary](./privacy): Firebase, FilesHub, OneSignal, Amplitude, Sentry, Yandex Metrica, and Microsoft Clarity. Being transparent about them is the point.

## Important to know

This page is a **plain-language summary** of how PregnancyPal handles data — it is **not** the legally binding document. The binding [privacy policy](https://pregnancypal.aoneahsan.com/privacy) and [terms](https://pregnancypal.aoneahsan.com/terms) are the authoritative versions.

PregnancyPal stores and organizes the information you choose to track. It does **not** diagnose, treat, monitor, or replace prenatal care, and it makes no security or compliance claims beyond what's described here.

**For any medical question or concern, consult your doctor, midwife, or another qualified healthcare professional. Nothing in PregnancyPal or this documentation is medical advice.**

## Related

- [Privacy summary](./privacy)
- [Terms summary](./terms)
- [Delete your account](../features/account/delete-account)
- [Export your data](../features/account/data-export)
- [Contact support](../help/contact-support)
- [About the developer (credits)](../about/credits)
- [Introduction to PregnancyPal](../intro)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
