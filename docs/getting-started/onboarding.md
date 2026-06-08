---
sidebar_position: 3
title: PregnancyPal Onboarding — LMP, Conditions, Diet Setup
description: Walk through PregnancyPal's onboarding — last menstrual period, baby count, risk flags, health conditions, and dietary preferences. Skip and resume anytime.
keywords:
  - PregnancyPal onboarding
  - last menstrual period
  - pregnancy app setup
  - gestational age calculator
  - dietary preferences pregnancy app
tags:
  - getting-started
  - onboarding
  - setup
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Onboarding walkthrough

> **PregnancyPal onboarding** is a short, multi-step setup right after sign-up that captures your pregnancy basics — last menstrual period (LMP), expected baby count, risk flags, health conditions, and dietary preferences — so the app can personalize tracking, content, and meal plans from day one.

Onboarding takes 3–5 minutes if you have your last period date handy and you know your dietary preferences. Every step is skippable. You can come back to any of these settings later from your profile, and updates instantly recalculate your week, due date, and meal plans.

## What you'll set up

- Your last menstrual period (LMP) — used to calculate your current week and due date.
- Whether you're carrying a singleton or multiples.
- Whether your provider has flagged you as high-risk and any specific complications.
- Existing health conditions you want PregnancyPal to take into account.
- Dietary restrictions and allergies for personalized meal planning.
- Notification preferences (you can also defer this).

## How onboarding works

Onboarding is split into 5 short screens. The progress bar at the top shows where you are.

### Step 1 — Pregnancy basics

1. **Last menstrual period (LMP)**: Open the calendar picker and select the first day of your last period. PregnancyPal uses Naegele's rule (LMP + 280 days) to calculate your due date.
2. **If you don't know your LMP**: Tap "I'd rather use a due date or week" and enter what your provider gave you.
3. **Number of babies**: Pick singleton, twins, or multiples (3+). This unlocks twin-aware content and adjusts nutrition targets.
4. Tap **Next**.

### Step 2 — Risk assessment

1. Tick any of these your provider has discussed with you:
   - Gestational diabetes (current or previous pregnancy)
   - Preeclampsia (current or previous pregnancy)
   - Bleeding or spotting
   - Cervical shortening / preterm labor history
   - High-risk pregnancy classification (general)
   - "Other (free text)"
2. None of this is shared anywhere. It only changes which content and reminders show up in your feed.
3. Tap **Next**. (If nothing applies, just tap Next.)

### Step 3 — Health profile

1. Select existing conditions:
   - Hypertension
   - Type 1 / Type 2 diabetes
   - Anemia or low iron
   - Thyroid issues (hypo / hyper)
   - PCOS
   - Asthma
   - Any other (free text — up to 5 entries)
2. These conditions feed into condition-aware nutrition, water targets, and educational content.
3. Tap **Next**.

### Step 4 — Dietary preferences

1. Choose any that apply:
   - **Vegetarian** (allows dairy and eggs)
   - **Vegan** (no animal products)
   - **Pescatarian** (fish-only animal protein)
   - **Gluten-free**
   - **Lactose-free / dairy-free**
   - **Nut-free**
   - **Halal**
   - **Kosher**
2. Add specific allergies (peanuts, shellfish, eggs, etc.).
3. Tap **Next**.

### Step 5 — Final confirmation and notifications

1. Review the summary card. Anything wrong? Tap **Edit** to go back.
2. Choose initial notification opt-ins:
   - Daily tips
   - Appointment reminders
   - Milestone celebrations
   - Diet plan reminders
3. Tap **Finish**. PregnancyPal generates your initial meal plan and routes you to the [Dashboard](./dashboard-tour).

## Examples

- **Sara, 28, first pregnancy**: Picks LMP from 6 weeks ago. Singleton. No risk flags. Has anemia. Vegetarian, no allergies. Onboarding finishes in 3 minutes; she lands on the dashboard at week 7 with iron-aware breakfast and dinner suggestions.
- **Ana, 35, twin pregnancy**: Picks her due date directly because her provider gave her one. Multiples. High-risk classification due to age and twins. No other conditions. No dietary restrictions. PregnancyPal tags her feed with twin-specific content and higher daily calorie targets.
- **Mei, planning to conceive**: Skips LMP, picks "I'm planning to conceive" — onboarding adapts to pre-pregnancy mode. Sets up cycle tracking and skips the meal plan. (Pre-pregnancy onboarding is the same flow with a different first question.)

## Tips

- If you're between cycles or unsure of your LMP, picking a date that's "close enough" still works. You can correct it later from your profile and the app will recalculate everything.
- Don't worry about answering every health question — onboarding is meant to be quick. Deeper customization happens via the profile screens later.
- The "free text" condition or allergy fields are private and only used inside the app. They don't go to your provider.
- The notification opt-ins on the last screen are the *initial* choices. You can fine-tune everything in Settings → Notifications later.

## Frequently asked questions

### Can I skip onboarding entirely?

Yes — most steps are skippable. The dashboard works without onboarding answers, but content will be generic and meal plans will be templated rather than personalized. We recommend at least filling in your LMP.

### What if I don't know my last period?

Tap "I'd rather use a due date or week" on step 1. If you have an ultrasound-based due date from your provider, that's typically more accurate than LMP-based estimation, especially for irregular cycles.

### Does PregnancyPal share my health profile with anyone?

No. Your health profile lives in your account in Firestore. Nothing is shared with marketers, advertisers, or third parties. Your data is used only to personalize your in-app experience.

### Can I change my answers later?

Yes. Every onboarding answer is editable from your profile. Updating LMP recalculates your week, due date, and milestone schedule. Updating conditions and dietary preferences regenerates your meal plan.

### How accurate is the due-date estimate?

PregnancyPal uses Naegele's rule (LMP + 280 days). This is the same baseline most providers use. Ultrasound-based dates from your provider are usually more precise — especially for irregular cycles. If your provider gives you a different date, use that one.

### Why does PregnancyPal ask about high-risk status?

So content can adapt. A person flagged as high-risk gets gentler default reminders (no alarmist phrasing), more "ask your provider" prompts, and content keyed to their specific condition rather than generic tips that might not apply.

### Is the meal plan locked to my onboarding answers forever?

No. The meal plan regenerates whenever you change a relevant setting. You can also override individual meals manually.

### Will PregnancyPal nag me about completing skipped steps?

Once at the end of onboarding, then never. There's a one-time gentle nudge in the dashboard if your profile is incomplete, but it can be dismissed permanently.

## What this guide does NOT cover

- Specific health-condition advice — PregnancyPal's content is educational; your provider's plan takes precedence.
- The dashboard layout — that's the [Dashboard tour](./dashboard-tour).
- Detailed meal-plan customization — that lives in the Diet & Nutrition section (later docs batch).
- Setting up push notifications on your phone — that's in the Mobile / Notifications sections (later docs batches).

## Related

- [Create your account](./sign-up)
- [Dashboard tour](./dashboard-tour)
- [Welcome and overview](../intro)
- [About PregnancyPal & credits](../about/credits)
- [Install or open the app](./installation)

---

*Updated 2026-05-10 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
