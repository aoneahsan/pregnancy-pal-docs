---
title: "Setting up a white-label deployment"
description: "The steps from paying for a Pregnancy Pal licence to a live deployment on your own domain, with your name, logo and colours."
sidebar_position: 3
tags: [white-label, setup, domain]
last_update:
  date: 2026-11-13
---

# Setting up your deployment

Here's what happens after you pay, in the order it happens.

1. **Your licence email.** It carries your licence key and a link to your licence certificate. Keep it: you'll need the key to renew.
2. **We agree the details.** We write to settle your domain (for example `app.yourclinic.com`), your name, your logo and your colours.
3. **Your domain.** You point the domain at us, and we connect it and keep its certificate current.
4. **Your branding.** Your name replaces ours on every screen and email, and the rings take your colours.
5. **It goes live.** We deploy it, put each release live afterwards and keep an eye on errors.

Every deployment serves a licence file at `/.well-known/pregnancypal-white-label-license.json` and a copy of the certificate beside it. We add both when we deploy, so there's nothing for you to upload.

If something in your setup needs changing that Pregnancy Pal doesn't do today, that's [custom work](https://pregnancypal.aoneahsan.com/white-label/custom-work).
