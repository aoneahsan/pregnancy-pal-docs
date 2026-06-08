---
sidebar_position: 1
title: Week-by-Week Pregnancy Tracker — How It Works in PregnancyPal
description: PregnancyPal's week-by-week tracker calculates your current week from LMP or due date and shows what is happening with your baby and body each week.
keywords:
  - week by week pregnancy tracker
  - pregnancy week calculator
  - PregnancyPal weeks
  - LMP based pregnancy tracker
  - gestational age calculator
  - pregnancy timeline
tags:
  - pregnancy-tracking
  - week-by-week
  - core-feature
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
---

# Week-by-week pregnancy tracker

> **The week-by-week tracker** is the core of PregnancyPal — a calendar that knows where you are in your pregnancy (1 through 42+) based on your last menstrual period or your provider's due-date estimate, and shows what is happening with your baby and your body each week.

If pregnancy had a single most-asked question, it would be "what week am I in, and what does that mean?" The week-by-week tracker answers both — quietly and in plain language. It runs in the background of every other feature in PregnancyPal: your meal plan adapts to your trimester, milestone celebrations trigger on the right week, the kick counter knows when to expect first quickening, and educational content is keyed to where you actually are. You set it up once during onboarding, and it stays in sync with your calendar from then on.

## What you can do with the week-by-week tracker

- See your **current week and day** at the top of the dashboard, in big, calm type — no math, no anxiety.
- See your **estimated due date (EDD)** and the number of days remaining.
- Read **this week's content** — what is happening with your baby's development, what changes you might feel, and gentle reminders for what to discuss at your next appointment.
- Browse **future weeks** to know what's coming, or **past weeks** to remember what you felt and learned.
- Switch between **LMP-based** and **provider-given EDD** modes if your ultrasound dates differ from the calendar.
- See the **trimester label** (1st, 2nd, 3rd) so feature content adapts automatically.

## How week calculation works

PregnancyPal uses standard obstetric conventions so the numbers match what you'll hear at your appointments.

1. **Pick your anchor** during onboarding: either the first day of your last menstrual period (LMP) or your provider's estimated due date (EDD).
2. **LMP-mode math**: PregnancyPal applies Naegele's rule (LMP + 280 days = EDD). Today's gestational age is `(today − LMP) / 7 days`, rounded down for "weeks" and using the remainder for "days".
3. **EDD-mode math**: If you supplied an EDD instead, PregnancyPal works backwards (EDD − 280 days = effective LMP) and uses the same formula.
4. **Day-of-week handling**: The tracker recalculates on every app open and on every day change in your local timezone. The week and day numbers stay accurate even if you cross midnight while logging.
5. **Future and past navigation**: Tap forward or back to read content for any week from 1 through 42. Past weeks include any logs you've already saved.
6. **Twin or multiples adjustment**: For multifetal pregnancies, content is augmented with twin-specific notes and risks, but the math is identical — gestational age is still measured from LMP/EDD.

## Examples

- **First-time, LMP-known** — You enter your LMP as 2026-01-04. Today is 2026-05-10. PregnancyPal calculates 18 weeks 1 day, places you in the second trimester, surfaces "Anatomy scan window is approaching" content, and your meal plan increases iron-rich suggestions.
- **Ultrasound-corrected** — You start with LMP-based week 8, but your provider's dating ultrasound at week 9 reads "8 weeks 4 days". You switch to EDD-based mode and supply the provider's EDD; the tracker recalculates everything by ~3 days. Your milestone schedule, content, and reminders update automatically.
- **Twin pregnancy** — You select "twins" during onboarding. The tracker shows the same week numbers but adds twin-specific content blocks ("twin movement at 16–18 weeks may feel different from singleton kicks") and adjusts nutrition targets in the meal planner.

## Tips

- **Use your provider's EDD if it differs from LMP-based math.** Ultrasound dating, especially in the first trimester, is typically more accurate than LMP for irregular cycles.
- **Update LMP if you discover it was off.** Settings → Pregnancy profile → LMP. Every other feature recalculates after you save.
- **Browse a few weeks ahead on Sunday evenings** — many people find that's a calm time to read about what the next week brings without feeling rushed.
- **Don't compare your week to someone else's.** Two pregnancies at "week 22" can feel completely different. The tracker is your reference, not a benchmark.

## Frequently asked questions

### How accurate is the week-by-week calculation?

PregnancyPal uses the same Naegele's rule (LMP + 280 days) that providers use, so the gestational age the app reports will match your appointment paperwork as long as your LMP is accurate. If you have an ultrasound-based EDD that differs by more than a few days, switch to EDD mode in your pregnancy profile. According to the American College of Obstetricians and Gynecologists, first-trimester ultrasound is the most accurate dating method when LMP is uncertain or cycles are irregular.

### What if my cycles are irregular?

Naegele's rule assumes a 28-day cycle and ovulation on day 14. If your cycles are longer, shorter, or irregular, LMP-based dating can drift. The cleanest fix is to use the provider-given EDD from your dating ultrasound. Your tracker then ignores LMP for math and just runs from the EDD anchor.

### Can I edit my LMP or EDD later?

Yes. Open **Settings → Pregnancy profile**, edit either field, and save. PregnancyPal recalculates your current week, due date, milestone schedule, content feed, and any planner outputs (meals, reminders) immediately. Existing logs (kicks, contractions, vitals) keep their original timestamps.

### Why does my dashboard show "Week X · Day Y" instead of just a week?

Because pregnancy weeks aren't whole — most of the time you're somewhere mid-week. The "day" suffix matches what your provider writes ("18+1", "18+5") and lets you map the app to your appointment notes exactly.

### Does the tracker count from conception or LMP?

From LMP, by default. This is the medical convention — gestational age is measured from the start of your last period, not from conception. Conception is typically about two weeks after LMP, so "week 6" of pregnancy is roughly 4 weeks after conception.

### What happens after my due date?

Pregnancy can extend up to about 42 weeks (post-term). PregnancyPal continues to track weeks past your due date and shows post-term content. Most providers monitor closely after week 41; the tracker will gently remind you to discuss any plans (induction, monitoring) with your provider.

### Can I track a previous pregnancy retrospectively?

The current tracker is built for an active pregnancy. Logging a past pregnancy retroactively isn't fully supported yet — it's on the roadmap. If you delivered and want to keep the data, use the export-to-PDF tools to save what you have before closing the pregnancy.

### Does the tracker work in offline mode?

On mobile, yes. The native Android (and iOS, when published) builds cache your LMP/EDD locally so the week calculation continues to work offline. Logs queue and sync when you reconnect.

## What this feature does NOT do

- **Diagnose** anything. The tracker tells you where you are; it does not interpret what that means medically.
- **Replace ultrasound dating.** If your provider gives you an EDD, that EDD is more accurate for ultrasound-confirmed pregnancies than LMP math.
- **Predict labor.** Term is a window (37–42 weeks), not a date. The "days remaining" countdown is a reference, not a deadline.
- **Track multiple pregnancies in parallel.** PregnancyPal supports one active pregnancy per account.
- **Provide medical advice.** Educational content is just that — content. Always check with your provider for medical decisions.

## Related

- [Pregnancy profile](./../pregnancy-profile)
- [Milestones](./milestones)
- [Baby development](./baby-development)
- [Maternal changes](./maternal-changes)
- [Dashboard](./../dashboard)
- [Onboarding walkthrough](./../../getting-started/onboarding)
- [Welcome and overview](./../../intro)

---

*Updated 2026-05-10 by Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan)*
