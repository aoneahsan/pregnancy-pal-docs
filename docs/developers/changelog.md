---
title: "Developers changelog"
description: "What changed in Pregnancy Pal's API, assistant server, webhooks, calendar feed and two-step sign-in, newest first."
tags: [developers]
last_update:
  date: 2026-11-21
  author: Ahsan Mahmood
---

# Developers changelog

Newest first. The API is version `v1`.

## 2026-11-21: the open platform

Your record opened to the tools you connect yourself, on every plan.

- **[Access keys](./access-keys.md)** that start with `pp_pat_`, with Read, Change and Delete ticked per part; Never only for a key that reads; shown again within 10 minutes of a sign-in; replaced with 24 hours of overlap.
- **[The API](./api.md)** at `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/api/v1`, with an OpenAPI document. Your own records read and change; the partner view, the partner link and the community rooms read only.
- **[Assistants](./assistants.md)** through the MCP server at `https://glmjdzqcparrcykstllr.supabase.co/functions/v1/mcp`, for Claude, ChatGPT, Claude Code and Cursor. An assistant's delete waits for your yes.
- **[Webhooks](./webhooks.md)** signed the Standard Webhooks way, carrying only an id, a kind and a time unless an address has Include what was written on.
- **[Calendar feeds](./calendar-feed.md)** that choose their parts and their titles.
- **[Two-step sign-in](./two-step-sign-in.md)** with ten recovery codes and an opt-in 7-day remembered browser.
