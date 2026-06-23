---
sidebar_position: 1
title: About PregnancyPal — Built by Ahsan Mahmood
description: Learn who built PregnancyPal, the engineering principles behind it, and how to support development. Independent maternal wellness app by Ahsan Mahmood.
keywords:
  - Ahsan Mahmood
  - PregnancyPal developer
  - independent pregnancy app
  - maternal wellness developer
  - aoneahsan
tags:
  - about
  - credits
  - developer
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
---

# About PregnancyPal & credits

> **PregnancyPal** is an independent maternal wellness app built and maintained by **[Ahsan Mahmood](https://aoneahsan.com)** — a software engineer focused on practical, free-tier-leaning consumer products. This page documents who built the app, why, and how to support development.

PregnancyPal is not a startup. There is no investor deck, no growth team, no quarterly OKRs. It's a careful, independent build with the explicit goal of being warm, evidence-aware, free for users, and free of the ad-stuffing and dark-pattern monetization common in the pregnancy-app space.

## What PregnancyPal is

A maternal wellness companion that runs on:

- **Web** — [pregnancypal.aoneahsan.com](https://pregnancypal.aoneahsan.com)
- **Android** — available on [Google Play](https://play.google.com/store/apps/details?id=com.aoneahsan.pregnancypal)
- **iOS** — use the web app on iPhone (no native iOS app)
- **Browser extension** — companion for desktop browsers

The same product across four surfaces, with shared data and offline support on mobile. Built on React 19 + TanStack Router + TypeScript, packaged with [Capacitor](https://capacitorjs.com/) for mobile and [WXT](https://wxt.dev/) for the browser extension. Backed by Firebase Auth + Firestore on the free tier wherever possible.

## About the developer

**Ahsan Mahmood**
Software Engineer · [aoneahsan.com](https://aoneahsan.com)

| Channel       | Link                                                                  |
| ------------- | --------------------------------------------------------------------- |
| Portfolio     | [aoneahsan.com](https://aoneahsan.com)                                |
| Email         | [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)                     |
| Phone / WhatsApp | +92 304 661 9706                                                   |
| LinkedIn      | [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan)        |
| GitHub        | [github.com/aoneahsan](https://github.com/aoneahsan)                  |
| NPM           | [npmjs.com/~aoneahsan](https://www.npmjs.com/~aoneahsan)              |
| Address       | [zaions.com/address](https://zaions.com/address)                      |

I build practical software for the long term — products that solve a real problem, lean on free tiers where they reasonably can, and don't drown the user in upsells. I work on a portfolio of consumer apps, browser extensions, and developer tools. PregnancyPal is one of them.

If you're a recruiter, hiring manager, or potential collaborator, I'm open to the right kind of work — full-time, contract, or open-source. Reach out via any of the links above.

## What this app reflects about how I work

A few principles you can see throughout PregnancyPal — and across my other projects:

- **Free where possible.** No paywalls on basic features. No ads-by-default. No "premium" subscription that hides core value behind a credit card.
- **Honest framing.** Every feature page in this documentation includes a "what this does NOT do" section. Apps in the health space too often imply more capability than they have. PregnancyPal does the opposite.
- **Free-tier-leaning architecture.** The app uses Firebase Authentication, Firestore (free tier), and FilesHub for files. Server-side compute is used only where Firestore Security Rules can't cover the case.
- **Discipline, not heroism.** Every log call goes through a centralized logger; storage uses Capacitor Preferences (never raw `localStorage`); a 39-rule master compliance sweep is in progress; cookie consent state lives in Preferences too. Boring engineering — but it's what makes a small team / one-person product sustainable.
- **Documentation as a first-class deliverable.** This site exists because users — and partners, family helpers, healthcare adjacent people — deserve a place to read about every feature without installing the app.

## Other things I make

A non-exhaustive list of public projects under the same author. Visit [aoneahsan.com](https://aoneahsan.com) for the live portfolio.

- **Browser extensions** — small, focused tools that solve real problems on the web.
- **Developer libraries** — published on [npmjs.com/~aoneahsan](https://www.npmjs.com/~aoneahsan).
- **Other consumer apps** — productivity, learning, and health-adjacent products.

If something I make has helped you, the best way to say thanks is to:

1. **Use it and tell a friend.** Word-of-mouth is the only marketing I do.
2. **Give honest feedback.** Email me at [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) — bug reports, feature requests, design critiques, all welcome.
3. **Follow / connect.** [LinkedIn](https://linkedin.com/in/aoneahsan), [GitHub](https://github.com/aoneahsan), [NPM](https://www.npmjs.com/~aoneahsan).
4. **Support development financially** — see below.

## How to support PregnancyPal

PregnancyPal is free for individuals and there's no plan to change that. If the app has helped you and you'd like to contribute toward keeping it running and getting new features built, you can support development at:

**[aoneahsan.com/payment?project-id=pregnancy-pal&project-identifier=com.aoneahsan.pregnancypal](https://aoneahsan.com/payment?project-id=pregnancy-pal&project-identifier=com.aoneahsan.pregnancypal)**

Support is fully optional. Contributions never unlock features — every feature stays available to every user.

## Credits and acknowledgments

PregnancyPal stands on the shoulders of the open-source ecosystem. Specific gratitude to:

- **The React, TypeScript, and Vite teams** for the foundation.
- **TanStack** ([tanstack.com](https://tanstack.com)) for Router, Query, Table, Form, and Virtual.
- **Radix UI** for accessibility-first primitives that make the design system possible.
- **Tailwind CSS** for the design tokens.
- **Capacitor** ([capacitorjs.com](https://capacitorjs.com/)) and **WXT** ([wxt.dev](https://wxt.dev)) for cross-platform packaging.
- **Firebase** for Authentication, Firestore, and Hosting on the free tier.
- **OneSignal** for push notification infrastructure.
- **Docusaurus** ([docusaurus.io](https://docusaurus.io)) for this documentation site.

And — most importantly — to **the people who use PregnancyPal**. Every email, bug report, and feature suggestion shapes where the product goes next.

## Honesty notice

PregnancyPal is **not a substitute for prenatal care**. It is a tracking and organization companion. It does not diagnose, predict outcomes, or replace your healthcare provider's recommendations. Always check with a qualified provider for medical decisions.

## Frequently asked questions

### Is PregnancyPal sponsored or affiliated with a hospital, clinic, or healthcare brand?

No. PregnancyPal is an independent product. It receives no funding from medical brands, has no advertising agreements with healthcare companies, and is not affiliated with any hospital, clinic, or insurance provider.

### Can I work with Ahsan or hire him?

Yes — for full-time, contract, or freelance work where the fit is right. Email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) with what you're working on.

### Where can I see other things Ahsan built?

[aoneahsan.com](https://aoneahsan.com) is the canonical portfolio. [GitHub](https://github.com/aoneahsan) and [NPM](https://www.npmjs.com/~aoneahsan) host the public open-source work.

### Is there a way to contribute code to PregnancyPal?

The main app's source code is currently in a private repository. This documentation site, however, is open — see [pregnancy-pal-docs](https://github.com/aoneahsan/pregnancy-pal-docs). Documentation contributions (typo fixes, feature corrections, clearer wording) are very welcome.

### How is PregnancyPal funded?

It's not. It's a self-funded independent project. Optional donations from users help offset hosting costs and a percentage of development time, but the core product stays free regardless.

### Can my employer / NGO / government use PregnancyPal?

Right now PregnancyPal is built for individual users. If you're a non-profit, healthcare provider, or employer with a use case (e.g., bulk distribution, custom branding, deeper integrations), email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) and we'll talk.

## Related

- [Welcome and overview](../intro)
- [Install or open the app](../getting-started/installation)
- [Create your account](../getting-started/sign-up)
- [Onboarding walkthrough](../getting-started/onboarding)
- [Dashboard tour](../getting-started/dashboard-tour)

---

*Updated 2026-06-23 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan) — [NPM](https://www.npmjs.com/~aoneahsan)*
