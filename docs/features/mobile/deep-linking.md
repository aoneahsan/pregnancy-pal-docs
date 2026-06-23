---
sidebar_position: 4
title: PregnancyPal Deep Links — pregnancypal:// Scheme & Web URLs
description: Deep links open a specific PregnancyPal section directly. On Android, pregnancypal:// links jump to your profile, community, or blog; on the web, normal page URLs do the same.
keywords:
  - PregnancyPal deep link
  - pregnancypal scheme
  - app deep linking Android
  - open app to section
  - PregnancyPal URL
  - mobile deep link pregnancy app
tags:
  - mobile
  - deep-linking
  - android
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# Deep linking

> **A deep link** in PregnancyPal is a link that opens the app directly to a specific section — on Android, links using the `pregnancypal://` scheme jump straight to a place like your profile, the community, or the blog, instead of just opening the home screen.

Deep links are the small convenience that makes "tap here to see it" actually land where you expect. Instead of opening PregnancyPal and then navigating several taps to a section, a deep link takes you there in one step. On the Android app this uses a custom `pregnancypal://` URL scheme. On the web, ordinary page URLs do exactly the same job — every section already has its own web address.

You'll mostly encounter deep links from notifications, shared links, and shortcuts rather than typing them by hand.

## What you can do with deep links

- **Open a specific section in one tap** — your profile, the community, the blog, and other in-app destinations.
- **Follow `pregnancypal://` links on Android** so the native app opens to the right place rather than the home screen.
- **Use normal web URLs on the web** — each section has its own page address that you can bookmark or share.
- **Get taken to the right spot from a notification**, so a reminder or update lands you exactly where it's relevant.
- **Share a link to a section** with someone who also uses PregnancyPal.

## How deep links work in practice

1. **On Android, a `pregnancypal://` link** (for example from a notification or a shortcut) is recognized by the installed app.
2. **The app opens** and routes you to the section the link points at — such as your profile, the community, or the blog.
3. **If the app isn't installed**, the link can't open it natively; use the web app instead.
4. **On the web, you open a normal page URL** (a regular `https://` address under [pregnancypal.aoneahsan.com](https://pregnancypal.aoneahsan.com)) and land on that section in the browser.
5. **Bookmark or share** whichever form you're using so you can return in one step.

## Examples

- **From a notification** — A community reply notification on Android opens, via a `pregnancypal://` link, straight to that community thread rather than the dashboard.
- **A shortcut to your profile** — You set up a quick way to reach your pregnancy profile; the deep link drops you right on the profile screen.
- **Sharing a blog post** — On the web you copy the page URL of a PregnancyPal blog article and send it to a friend, who opens it in their browser to the same article.

## Tips

- **Deep links need the app installed** to open natively on Android — otherwise use the web URL.
- **On the web, just use the page address.** There's no special scheme to learn; the URL in your browser bar is the deep link.
- **Bookmark sections you visit often** so you skip the navigation each time.
- **Notifications already use deep links**, so tapping a reminder usually takes you to the relevant place — see [Push notifications](../notifications/push).
- **If a `pregnancypal://` link doesn't open anything**, the app may not be installed or the link may be old; open the web app instead.

## Frequently asked questions

### What is the `pregnancypal://` scheme?

It's the custom URL scheme the Android app registers so that links beginning with `pregnancypal://` open the app directly to a specific section, like your profile, the community, or the blog.

### Do deep links work on the web?

The web doesn't use the `pregnancypal://` scheme — instead, every section has a normal `https://` page URL that does the same thing. Open the URL in your browser and you land on that section.

### What happens if I tap a `pregnancypal://` link without the app installed?

It can't open the native app, because there's nothing to handle the scheme. Use the web app at [pregnancypal.aoneahsan.com](https://pregnancypal.aoneahsan.com) instead.

### Can I create my own deep links?

You'll mainly meet deep links through notifications, shared links, and shortcuts. On the web you can copy any section's page URL to share or bookmark it.

### Do deep links work on iPhone?

There's no native iOS app, so the `pregnancypal://` scheme isn't used on iPhone. Use the web page URLs in Safari instead — see [Using PregnancyPal on iPhone & iPad](./install-ios).

### Are deep links a security risk?

A deep link just navigates to a section; it doesn't bypass sign-in. You still need to be signed in to see your private data. Keep your account secure with [Security](../account/security).

## What this feature does NOT do

- **Deep links do not bypass sign-in.** You still need to be authenticated to view your private information.
- **The `pregnancypal://` scheme does not work without the Android app installed**, and isn't used on iOS.
- **Deep links do not share or expose your data** to anyone who can't already access your account.
- **PregnancyPal does not diagnose, monitor your health, or replace prenatal care** — deep links are only a navigation convenience.

**PregnancyPal is a companion, not a clinician. For any medical question or concern about your pregnancy, contact your healthcare provider or your local emergency number. This app does not provide medical advice.**

## Related

- [Install on Android](./install-android)
- [Using PregnancyPal on iPhone & iPad](./install-ios)
- [Offline mode](./offline-mode)
- [Sharing & PDF reports](./share-and-pdf)
- [Push notifications](../notifications/push)
- [Account security](../account/security)
- [Dashboard](../dashboard)
- [Dashboard tour](../../getting-started/dashboard-tour)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
