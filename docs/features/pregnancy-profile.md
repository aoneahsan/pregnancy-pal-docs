---
sidebar_position: 3
title: Pregnancy Profile in PregnancyPal — LMP, EDD, Twins, Conditions
description: Manage your pregnancy profile in PregnancyPal — LMP or EDD, baby count, risk flags, health conditions, and dietary preferences. Edit anytime; everything recalculates.
keywords:
  - PregnancyPal pregnancy profile
  - LMP edit
  - due date edit
  - pregnancy app twin setup
  - PregnancyPal conditions
  - pregnancy app dietary preferences
tags:
  - pregnancy-profile
  - settings
  - core-feature
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Pregnancy profile

> **Your pregnancy profile** in PregnancyPal is the small set of facts the app uses to personalize everything — your last menstrual period (LMP) or estimated due date (EDD), the number of babies, any risk flags your provider has discussed with you, current health conditions, and dietary preferences. Editing any of these recalculates the whole app to match.

You set the pregnancy profile up during onboarding, and most people never need to revisit it. But it's editable — and editing it is the right move whenever any of those facts change. A new ultrasound EDD, a newly diagnosed condition, a change in dietary preference: update the profile and the dashboard, meal plan, milestone schedule, and notification cadence all adapt.

## What you can do with the pregnancy profile

- **Edit your LMP** or your provider's EDD; the app recalculates your week, due date, and milestone schedule.
- **Switch baby count** between singleton, twins, and multiples.
- **Update risk flags** — high-risk pregnancy, previous complications, etc.
- **Add or remove health conditions** (gestational diabetes, hypertension, anemia, thyroid, etc.).
- **Change dietary preferences and allergies** — your meal plan re-generates instantly.
- **Mark pre-pregnancy mode** if you're now planning to conceive (or close the pregnancy if it has ended).

## How the profile drives the rest of the app

1. **Week and due date**: From LMP or EDD, exactly as described in the [week-by-week tracker](./pregnancy-tracking/week-by-week).
2. **Milestone schedule**: Built from week 0 through 42 based on standard obstetric markers; recalculates on every LMP/EDD edit.
3. **Meal plan personalization**: Trimester-keyed nutrition targets, condition-aware suggestions (e.g. lower-glycemic for gestational diabetes), and dietary-restriction filtering all derive from profile fields.
4. **Educational content**: Risk flags and conditions feed into which content cards surface and what tone they use.
5. **Notification logic**: Reminder cadence (e.g. more frequent water reminders for gestational diabetes) follows your conditions.
6. **Twin-aware features**: Twin-specific content blocks and adjusted nutrition targets activate when baby count is 2+.

## Examples

- **EDD correction after dating ultrasound**: You enter LMP-based week 8, but your provider's ultrasound says you're 8 weeks 4 days. Open Profile → switch from LMP to EDD mode → enter the provider's EDD. Save. Your week, milestones, meal plan, and notifications recalculate immediately. Existing logs keep their original timestamps.
- **Gestational diabetes diagnosed**: At your week-26 glucose tolerance test, your provider diagnoses gestational diabetes. Open Profile → Health conditions → add "Gestational diabetes". Save. Your meal plan regenerates with lower-carbohydrate, lower-glycemic suggestions; water reminders increase; relevant content cards appear in the dashboard.
- **Switching to twins**: You learn at the first ultrasound that it's twins. Profile → Baby count → "Twins". Save. Twin-specific content activates, milestone schedule adds extra monitoring markers, nutrition targets bump up.

## Tips

- **Update the profile as soon as anything changes**, not weeks later. Earlier edits mean the app's other features stay accurate.
- **Don't worry about over-editing.** The profile is designed to be edited; nothing breaks. Existing logs retain their timestamps and numbers.
- **If you're unsure about a condition**, leave it off and add it once your provider has confirmed.
- **Risk flags are private** — they only affect what you see in the app. Nothing is shared with anyone.
- **You can pause the app** if your pregnancy ends or pauses (loss, transfer to a different app, etc.). Settings → Profile → Close pregnancy gives you data export and a clean state.

## Frequently asked questions

### What happens if I change my LMP or EDD?

The app recalculates current week, days remaining, milestone schedule, content cards, and meal plan. Existing logs (kicks, contractions, vitals, symptoms) keep the timestamps you originally entered them with — only the *interpretation* of "what week was this log in" changes.

### Can I have multiple pregnancies tracked at once?

No. PregnancyPal supports one active pregnancy per account. If your pregnancy ends and a future one begins, close the current one (export data first if you want to keep it) and start a new one.

### Will updating my dietary preferences change my historical meal plans?

No. Past days' meal plans remain as they were saved. The change applies to today's plan and future plans only.

### Does PregnancyPal send my profile data to anyone?

Your profile lives in your account in Firestore tied to your sign-in. It is not sold, advertised against, or shared with third parties. Detailed data-handling notes will be in the [Data handling](./../legal/data-handling) page in a later docs batch.

### Why does the app ask about high-risk status?

So content adapts. Someone flagged as high-risk gets gentler default reminders, more "discuss with your provider" prompts, and avoids alarmist generic content. The flag is informational only — PregnancyPal doesn't act on it medically.

### Can I switch from LMP-based to EDD-based mode and back?

Yes. The mode toggle is in Profile. Switching does not lose any data. You can re-enter LMP if you switch from EDD-based mode back to LMP-based.

### What if I'm not sure of my LMP?

Leave the LMP field blank and use EDD mode with your provider's date. Or enter your best estimate of LMP — most people are off by a few days at most, which is within the typical clinical margin anyway.

### Is "pre-pregnancy mode" a separate profile?

It's the same profile, just with a different active state. Switching to pre-pregnancy mode swaps the dashboard from week-based to cycle-based, hides pregnancy-specific content, and activates [period and fertility](./period/cycle-tracking) features. Switch back when you're pregnant again.

## What this feature does NOT do

- **Provide medical advice** based on profile fields. The fields personalize app content; they do not constitute a medical record.
- **Replace your provider's chart.** Your provider's medical record is the authoritative one. The pregnancy profile is for app personalization.
- **Auto-detect conditions** from logs. If your symptom log shows high blood pressure for a few days, the app does not infer hypertension — that's a clinical diagnosis.
- **Sync with electronic health records (EHR).** EHR integrations aren't shipped. You can manually keep both in sync as updates happen.

## Related

- [Week-by-week tracker](./pregnancy-tracking/week-by-week)
- [Milestones](./pregnancy-tracking/milestones)
- [Maternal changes](./pregnancy-tracking/maternal-changes)
- [Dashboard](./dashboard)
- [Onboarding walkthrough](../getting-started/onboarding)
- [Account profile](./account/profile)

---

*Updated 2026-05-10 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
