---
sidebar_position: 2
title: Create Your PregnancyPal Account — Sign In with Google
description: Sign up for PregnancyPal by signing in with your Google account, then start tracking your pregnancy week by week across web, Android, and the browser extension.
keywords:
  - PregnancyPal sign up
  - PregnancyPal account
  - pregnancy app login
  - Google sign-in pregnancy app
  - Google account pregnancy app
tags:
  - getting-started
  - account
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Create your account

> **Creating a PregnancyPal account** sets up a personal, secure workspace where your pregnancy data, kick logs, contraction logs, meal plans, appointments, and preferences are saved and synced across web, mobile, and the browser extension.

Signing up takes about 60 seconds — you sign in with your Google account, and your data is tied to that identity and follows you to every device you log in on.

## What you can do after signing up

- Save your last menstrual period (LMP) and let the app calculate your week and due date.
- Log kicks, contractions, vitals, meals, and symptoms.
- Get reminders for appointments, daily tips, and milestones.
- Sync the same data between web and mobile.
- Export your logs as PDF for your healthcare provider.

## How to sign up

### 1. Open the sign-in page

From the [PregnancyPal home page](https://pregnancypal.aoneahsan.com), click **Sign in** in the top right. This opens the sign-in screen.

### 2. Sign in with Google

PregnancyPal uses your Google account to create and secure your account.

1. Click **Continue with Google**.
2. Pick a Google account from the popup, or sign into one you haven't used before.
3. Approve the access request — PregnancyPal sees your name, email, and avatar but never your Google password.
4. You're done. No separate email verification step is needed.

### 3. Land on onboarding

After signing up, the app routes you to the [Onboarding walkthrough](./onboarding) — a multi-step setup where you tell PregnancyPal about your pregnancy basics so it can personalize the experience. You can skip steps and come back later.

## Examples

- **You already use Gmail every day.** *Continue with Google* is instant — no extra password to remember.
- **You keep a separate Google account for apps.** Choose that account in the Google popup so PregnancyPal stays tied to the identity you prefer.
- **You're switching to a new phone.** Sign in with the same Google account and your data is already there — nothing to migrate.

## Tips

- Your Google account is your sign-in — there's no separate PregnancyPal password to set or remember.
- Google handles your password and any two-factor protection. Keep your Google account secure and your PregnancyPal account stays secure too.
- Signing in is the same on every surface — the web app, the Android app, and the browser extension all use your Google account.
- You can have only one PregnancyPal account per Google identity. Trying to "sign up" with a Google account that's already registered will simply sign you in.

## Account security basics

- PregnancyPal handles sign-in through Firebase Authentication using your Google account. The app never sees or stores a password — Google manages that.
- Sensitive actions (like deleting your account) require re-authenticating with Google.
- If you ever lose access, recover your Google account through Google's account-recovery flow; your PregnancyPal data stays tied to that identity.

## Frequently asked questions

### Do I need an email to sign up?

You sign in with Google, so the email tied to your Google account is what PregnancyPal uses for account-related notices and (if you opt in) digest reminders. There's no separate email to enter.

### Can I change my sign-in method later?

PregnancyPal signs you in with Google. There's a single sign-in method today, so there's nothing to switch between — your account is always tied to your Google identity.

### What if I already have an account on another pregnancy app?

PregnancyPal is independent — there's no automatic import from other apps. You'll set up onboarding fresh. We're working on import paths for common apps but they're not shipped yet.

### Is two-factor authentication available?

Because you sign in with Google, your Google account's two-factor protection already covers your PregnancyPal account. Turn on 2FA in your Google account settings for an extra layer of security.

### Can I sign up anonymously without an email?

Not yet. Anonymous accounts make features like cross-device sync and account recovery impossible. Anonymous mode is on the roadmap for "just trying it out" use.

### What happens to my data if I delete my account?

When you request account deletion, your auth record, profile, pregnancy data, logs, and uploaded files are removed. The deletion flow is in Account & Settings (documented in a later batch).

### Why does PregnancyPal use Google sign-in instead of Facebook or Twitter?

Google is a broad, reliable identity provider that most people already have, and it keeps sign-in to a single, well-understood step. Adding more providers is possible but increases the support burden — Google sign-in covers the vast majority of users today.

## What this guide does NOT cover

- Onboarding steps (LMP, conditions, dietary restrictions) — that's [Onboarding walkthrough](./onboarding).
- Account deletion or data export — those will appear in the Account & Settings section in a later docs batch.
- Two-factor authentication setup — not yet available.

## Related

- [Install or open the app](./installation)
- [Onboarding walkthrough](./onboarding)
- [Dashboard tour](./dashboard-tour)
- [Welcome and overview](../intro)
- [About PregnancyPal & credits](../about/credits)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
