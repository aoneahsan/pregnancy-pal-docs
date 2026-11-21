---
title: "Pregnancy Pal for developers"
description: "Reach your own Pregnancy Pal record from a script, an assistant such as Claude or ChatGPT, your own server or your calendar, and what an outside app can never touch."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Pregnancy Pal for developers

**Your record can be read and changed from outside Pregnancy Pal, by things you connect yourself.** A script with an access key, an assistant such as Claude or ChatGPT, a server that hears about each change, or a calendar that shows your visits. You set them all up in **Account**, then [**Other apps**](https://pregnancypal.aoneahsan.com/profile/other-apps), on every plan, Free included.

What comes back is your record exactly as you wrote it. Nothing is worked out from it, and nothing is advice.

## Four ways in

| Way | What it's for | Read |
|---|---|---|
| Access key and the API | Your own script or tool reads and changes your record, the way you would in the app | [Access keys](./access-keys.md), [The API](./api.md) |
| An assistant | Ask Claude, ChatGPT, Claude Code or Cursor to "add a question for my next visit" | [Assistants](./assistants.md) |
| Webhooks | Pregnancy Pal tells your server when something changes | [Webhooks](./webhooks.md) |
| Calendar feed | Your visits, medication times and due date in Google Calendar or on an iPhone | [Calendar feed](./calendar-feed.md) |

## What an outside app can reach

| | What |
|---|---|
| **Read and change** | Your own records: pregnancy, periods and cycles, fertility notes, readings, vitals, wellness, medication and doses, visits and visit questions, diet plans, baby, reminders and preferences |
| **Read only** | The partner view (what a partner shares with you), your partner link, and the community rooms. Other people are part of these, so only Pregnancy Pal itself changes them |
| **Never** | Anything in the list below |

Deleting is a tick of its own for each part, off unless you tick it. An assistant never deletes in one step: it asks, and nothing goes until you say yes on Pregnancy Pal.

### What an outside app can never do

- Read anyone else's record. A partner's key sees only what that person chose to show them.
- Post, reply, like or report in the community rooms. It can read them, nothing more.
- See your sign-in, your two-step codes, your keys or your payments.
- Change your plan, your email or who your partner is.
- Delete anything an assistant asks to delete, until you say yes on Pregnancy Pal.
- Get advice from us. It gets your records exactly as you wrote them, and nothing worked out from them.

Two switches also stay in the app whatever a key can do: **Suggestions** and **Speak**. Both send parts of your record to an AI provider, so only you turn them on, in the app.

## Limits by plan

| | Free | Plus | Family |
|---|---|---|---|
| Access keys | 5 | 25 | 50 |
| Requests a day | 5,000 | 50,000 | 100,000 |
| Webhook addresses | 3 | 20 | 40 |
| Assistant connections | 3 | 10 | 25 |
| Calendar feeds | 2 | 10 | 20 |

Requests a day count every key and assistant of yours together, and the count starts again at midnight UTC. **Use against your plan**, on the same page, shows how many you've used today.

## The addresses

| | |
|---|---|
| API base URL | `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1` |
| OpenAPI document, no key needed | `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1/openapi.json` |
| The same, as Markdown | `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1/openapi.md` |
| MCP server, for assistants | `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/mcp` |

What changed and when: the [changelog](./changelog.md). Questions: the [contact page](https://pregnancypal.aoneahsan.com/contact).
