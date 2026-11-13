---
title: "Verifying a Pregnancy Pal licence"
description: "How anyone can check a Pregnancy Pal white-label licence by its key or by the domain a deployment runs on, and what each answer means."
sidebar_position: 5
tags: [white-label, verify, licence]
last_update:
  date: 2026-11-13
---

# Verifying a licence

Anyone can check a licence on the [verify page](https://pregnancypal.aoneahsan.com/verify-license). Verification is run by our licensing service.

## Two ways to check

- **By key.** Paste the licence key from the licence email. It starts with `PREGNANCYPAL-WL-`.
- **By domain.** Enter the domain a deployment runs on. We read the licence file it serves at `/.well-known/pregnancypal-white-label-license.json`, over https.

## What the answers mean

| Answer | Meaning |
| --- | --- |
| Valid | The key belongs to an active licence. |
| Being set up | The licence is paid for and its deployment is being set up. |
| Licensed | The domain serves a valid licence that covers it. |
| Not this domain | The licence file names a licence for a different domain. |
| No licence file | The domain doesn't serve a Pregnancy Pal licence file. |
| Revoked | The licence no longer covers any deployment. |
| Not found | No licence carries that key. |

A check shows only the organization's name, its domains, its platforms and its dates. It never shows an email or a price.

If a site uses the Pregnancy Pal name without a valid licence, [tell us](https://pregnancypal.aoneahsan.com/contact).
