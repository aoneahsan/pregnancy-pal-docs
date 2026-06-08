---
sidebar_position: 2
title: PregnancyPal Dashboard Reference — Layout, Cards, Customization
description: Reference guide for PregnancyPal's dashboard — every card, tile, insight, and customization option explained, including how the layout adapts per surface.
keywords:
  - PregnancyPal dashboard reference
  - pregnancy dashboard customization
  - dashboard tiles
  - dashboard insights
  - PregnancyPal layout
tags:
  - dashboard
  - reference
  - core-feature
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Dashboard reference

> **The PregnancyPal dashboard** is the home screen you land on after sign-in — a single, calm hub that surfaces your current week, today's most relevant card, quick-action tiles for daily tools, milestone strip, insights row, and section shortcuts. This page is the reference: every card, every tile, every customization option, in one place.

The [Dashboard tour](../getting-started/dashboard-tour) walks a brand-new user through the layout. This page is the deeper reference — what every element does, how to customize it, and how the layout adapts across web, Android, iOS, and the browser-extension popup.

## What you can do from the dashboard

- **See your current pregnancy week and day** in large, calm type at the top.
- **Read today's highlight** — one auto-curated card surfaced from the day's most relevant signal.
- **Launch any quick-action tool** with a single tap (kicks, contractions, water, meals, vitals, appointments).
- **Browse the milestone strip** for what's recently passed and what's coming.
- **Review insights** — gentle, factual observations from your logged data.
- **Jump to any section** via the bottom shortcuts row.
- **Re-order or hide tiles** to match how you actually use the app.

## Dashboard sections in order

### 1. The greeting + week card

The first element on the page. Contains:

- A friendly greeting using your first name from your profile.
- **Current week and day** in big type (e.g. "Week 22 · Day 3").
- **Trimester label** (1st / 2nd / 3rd).
- **Days remaining** until your due date.
- A short, week-keyed message ("Anatomy scan window opens this week — schedule it if you haven't.").

If your profile is incomplete (no LMP/EDD), this card shows a soft "Finish setup" prompt instead of the week numbers.

### 2. Today's highlight

A single card, one screen-tap tall, showing the most relevant thing for *today*:

- An upcoming appointment within 24 hours.
- A meal-plan teaser ("Today's lunch suggestion is …").
- A wellness reminder ("It's been a while since you logged water.").
- A milestone teaser ("You hit Week 22 today.").
- A community digest ("Your week-cohort posted 3 things you might want to read.").

The highlight is auto-curated from these signals in priority order. If multiple signals match, the highest-priority one shows; the others surface in their own sections below.

### 3. Quick-action tile grid

4–6 large tap-targets for the tools you'll use most. Default order:

| Tile           | Action                                                |
| -------------- | ----------------------------------------------------- |
| Log a kick     | Opens [kick counter](./tools/kick-counter)            |
| Time contractions | Opens [contractions timer](./tools/contractions-timer) |
| Log water      | Adds 1 glass to today's water count                   |
| Today's meals  | Opens the [meal plan](./diet/meal-planning)           |
| Add appointment | Opens the [appointment scheduler](./appointments/scheduling) |
| Log vital      | Opens the vitals quick-entry sheet                    |

Tiles can be re-ordered (long-press on mobile, drag on web) or hidden (right-click → Hide).

### 4. Milestone strip

Horizontal-scrolling strip of recent + upcoming milestones — first kick week, anatomy scan, glucose tolerance, viability, third-trimester start, full-term, etc. Tap any entry to read the full content. See [Milestones](./pregnancy-tracking/milestones).

### 5. Insights row

If you've logged data, this row surfaces gentle, factual observations:

- "Your weight gain trend is on track."
- "Average kick session this week: 18 minutes."
- "You haven't logged a vital this week."

Insights never alarm or diagnose. They're meant to help you notice patterns. Tap an insight for the underlying chart.

### 6. Section shortcuts (bottom)

Direct links to major sections — Pregnancy Tracking, Wellness, Diet, Appointments, Community, Account. One tap to anywhere in the app.

## Layout differences by surface

| Surface              | Layout                                               | Notable differences                                                       |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| Web (≥ 1024 px)      | 3-column at the top, sections stacked below          | More info above the fold; insights row uses 3 cards side-by-side          |
| Web (640–1023 px)    | 2-column responsive                                  | Quick-action tiles wrap; milestones single-row                            |
| Mobile (≤ 640 px)    | Single-column stack                                  | Milestones swipe horizontally; insights stack one-per-row                  |
| Browser extension popup | Compact mini-dashboard                              | Just week + today's highlight + 3 quick actions; tap any to open the web app |

## Tips

- **Re-order quick-action tiles** so the ones you use daily are top-left. The dashboard remembers your order per device.
- **Hide insight types** you find unhelpful — Settings → Dashboard → Insights → toggle.
- **Pull-to-refresh on mobile** forces a sync if you suspect the dashboard is stale.
- **The dashboard layout state syncs across devices** — if you re-order on web, mobile picks up the change next time you open it.
- **Want a more minimalist dashboard?** Settings → Dashboard → Minimalist mode hides the milestone strip and insights row, leaving only week, today's highlight, and quick actions.

## Frequently asked questions

### Why is my dashboard showing placeholders for week and due date?

Because your pregnancy profile is incomplete. Open the "Finish setup" prompt or go to Settings → Pregnancy profile and add your LMP or EDD.

### Can I add my own custom tiles?

Re-ordering and hiding default tiles is supported. Custom tiles (e.g. "open this URL") are not yet supported but are on the roadmap.

### Why don't I see insights yet?

Insights need 1–2 days of logged data to start. The first insight typically appears 24–48 hours after your first kick log, water log, or vital entry.

### How is "today's highlight" chosen?

By a priority list: imminent appointment → milestone of the day → wellness reminder if overdue → meal plan teaser → community digest. The first match in priority order wins.

### Can I see more than one card in "today's highlight"?

The highlight slot shows one card. Other relevant signals — community digest, wellness reminders — appear lower on the dashboard in their own sections.

### Does the dashboard work offline?

On native mobile, yes — cached data displays and you can interact with the quick-action tiles. Sync resumes when you reconnect. On the web, dashboard requires a connection.

### How do I get back to a default layout if I've changed too much?

Settings → Dashboard → "Reset to defaults". Your data is unaffected; only the visual layout resets.

### Why isn't there a week-progress bar?

Because pregnancy isn't a progress bar. It's a journey, and a long countdown bar can be more anxiety-inducing than helpful for many people. The "days remaining" counter and the milestone strip together do what a progress bar would, more calmly.

## What this feature does NOT do

- **Aggregate medical metrics** in a clinical-dashboard sense. PregnancyPal's dashboard is friendly and at-a-glance — for deeper analytics, open the relevant feature page.
- **Display third-party data** (your fitness tracker, smart scale, etc.). Native integrations with wearables aren't shipped yet.
- **Replace your provider's records.** PDF exports of vitals and appointments are the right tool for sharing with your care team.

## Related

- [Dashboard tour (getting started)](../getting-started/dashboard-tour)
- [Week-by-week tracker](./pregnancy-tracking/week-by-week)
- [Milestones](./pregnancy-tracking/milestones)
- [Pregnancy profile](./pregnancy-profile)
- [Onboarding walkthrough](../getting-started/onboarding)
- [Kick counter (tile target)](./tools/kick-counter)
- [Contractions timer (tile target)](./tools/contractions-timer)

---

*Updated 2026-05-10 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
