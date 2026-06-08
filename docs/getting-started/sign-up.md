---
sidebar_position: 2
title: Create Your PregnancyPal Account — Email, Google, Apple
description: Sign up for PregnancyPal with email and password, Google OAuth, or Apple Sign-In. Verify your email, set a strong password, and start tracking.
keywords:
  - PregnancyPal sign up
  - PregnancyPal account
  - pregnancy app login
  - Google sign-in pregnancy app
  - Apple sign-in pregnancy app
tags:
  - getting-started
  - account
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Create your account

> **Creating a PregnancyPal account** sets up a personal, password-protected workspace where your pregnancy data, kick logs, contraction logs, meal plans, appointments, and preferences are saved and synced across web, mobile, and the browser extension.

Signing up takes about 60 seconds. You can use email and a password, sign in with Google, or — on Apple devices — sign in with Apple. Either way, your data is tied to that identity and follows you to every device you log in on.

## What you can do after signing up

- Save your last menstrual period (LMP) and let the app calculate your week and due date.
- Log kicks, contractions, vitals, meals, and symptoms.
- Get reminders for appointments, daily tips, and milestones.
- Sync the same data between web and mobile.
- Export your logs as PDF for your healthcare provider.

## How to sign up

### 1. Open the sign-in page

From the [PregnancyPal home page](https://pregnancypal.aoneahsan.com), click **Sign in** in the top right. This opens the auth screen with three options.

### 2. Choose your sign-up method

You have three equivalent options. Pick the one that works best for you.

#### Option A — Email and password

1. Click **Sign up with email**.
2. Enter your email and a password (12+ characters recommended; mix letters, numbers, and a symbol).
3. Click **Create account**.
4. Check your inbox for a verification email. Click the link inside to confirm your address.

#### Option B — Sign in with Google

1. Click **Continue with Google**.
2. Pick a Google account from the popup or sign into one you haven't used before.
3. Approve the access request — PregnancyPal sees your name, email, and avatar but never your Google password.
4. You're done. No email verification step is needed.

#### Option C — Sign in with Apple (iOS / macOS Safari)

1. Click **Continue with Apple**.
2. Use Touch ID, Face ID, or your Apple ID password to authenticate.
3. Choose whether to share your real email or use Apple's hide-my-email relay.
4. Confirm. You're in.

### 3. Land on onboarding

After signing up, the app routes you to the [Onboarding walkthrough](./onboarding) — a multi-step setup where you tell PregnancyPal about your pregnancy basics so it can personalize the experience. You can skip steps and come back later.

## Examples

- **You already use Gmail every day.** Use *Continue with Google* — fastest, no extra password to remember.
- **You're privacy-focused on iOS.** Use *Sign in with Apple* and choose the hide-my-email relay so PregnancyPal never sees your real address.
- **You want to keep this app firmly separated from your other identities.** Use *email + password* with a fresh email.

## Tips

- Use a real email address — you'll need it for password reset and account-recovery flows.
- Save your password in a password manager (Apple Keychain, Bitwarden, 1Password). PregnancyPal never sees or stores your password in plain text.
- If you sign in with Google or Apple, you don't have a password — your provider handles that. To unlink later, you'll need to re-authenticate with the original method.
- You can have only one account per email/Google/Apple identity. Trying to "sign up" with an identity that's already registered will sign you in instead.

## Account security basics

- PregnancyPal stores your authentication via Firebase Authentication. Passwords are hashed (bcrypt-family); we never store or transmit your password in plain text.
- Sensitive actions (delete account, change email) require re-authenticating with your original method.
- If you forget your password, use **Forgot password** on the sign-in screen. We'll send a reset link to your email.

## Frequently asked questions

### Do I need an email to sign up?

Yes. Email is required for account recovery, important security notices, and (if you opt in) digest reminders. Apple Sign-In's hide-my-email relay still gives you a working email — Apple just routes it.

### Can I change my sign-in method later?

You can change your password via the security settings. Switching from email/password to Google or Apple requires creating a new account today; we'll add a "link methods" feature later.

### What if I already have an account on another pregnancy app?

PregnancyPal is independent — there's no automatic import from other apps. You'll set up onboarding fresh. We're working on import paths for common apps but they're not shipped yet.

### Is two-factor authentication available?

Two-factor (2FA) for email-and-password accounts is on the roadmap. If you sign in with Google or Apple, your provider's 2FA already protects your PregnancyPal account.

### Can I sign up anonymously without an email?

Not yet. Anonymous accounts make features like cross-device sync and account recovery impossible. Anonymous mode is on the roadmap for "just trying it out" use.

### What happens to my data if I delete my account?

When you request account deletion, your auth record, profile, pregnancy data, logs, and uploaded files are removed. The deletion flow is in Account & Settings (documented in a later batch).

### Why does PregnancyPal use Google and Apple instead of Facebook or Twitter?

Google and Apple are the broadest, most reliable identity providers for an app aimed at general consumers. Adding more providers is possible but increases support burden — for now, three options cover the vast majority of users.

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

*Updated 2026-05-10 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
