# PregnancyPal Docs — Agent Instructions

**Last Updated**: 2026-05-29

Public user documentation site for **PregnancyPal** (the maternal-wellness app). This repo is the **only public, indexable surface** for the product — the app's own source lives in a separate private repository.

---

## What this project is

- **Type**: Documentation / knowledge-base site (Docusaurus 3).
- **Stack**: Docusaurus `3.10.1` (preset-classic + theme-mermaid), React `19.2.x`, TypeScript `~6.0`, MDX 3, Yarn `4.14.1` (Berry, `node-modules` linker).
- **Live URL**: https://pregnancypal-docs.aoneahsan.com
- **Documents the app**: https://pregnancypal.aoneahsan.com (Capacitor app id `com.aoneahsan.pregnancypal`).
- **Deploy**: Firebase Hosting (primary) + GitHub Pages mirror (`aoneahsan.github.io/pregnancy-pal-docs/`), both via `.github/workflows/`.
- **License**: MIT (documentation content).
- **Dev port**: `5946` (`yarn start` / `yarn serve`).

> This is a docs site — there are **no Capacitor/store identifiers of its own** (those belong to the parent app). It carries no auth, no Firestore, no forms.

---

## Repo / git note (IMPORTANT for maintainers)

This project now has **its own private GitHub repo**: `github.com/aoneahsan/pregnancy-pal-docs` (remote name `o`, branch `main`). Commit + push directly here (one commit per prompt, then `git push o main`). It is a standalone repo — not a submodule/gitlink of `01-code`. (Created 2026-06-08.)

---

## Commands

```bash
yarn install          # reconcile deps
yarn start            # local dev server on :5946 (DO NOT run in agent sessions)
yarn typecheck        # tsc --noEmit
yarn build            # docusaurus build → ./build
yarn serve            # preview built site on :5946 (DO NOT run in agent sessions)
yarn lint             # eslint --max-warnings=0
```

`onBrokenLinks: 'warn'` — forward-references to not-yet-written docs pages (diet, appointments, period, reporting, notifications, account, legal) emit warnings but do not fail the build. Fill those pages in upcoming content batches and the warnings clear themselves.

---

## SEO / AEO (already shipped)

- `static/robots.txt` — explicit allowlist for Googlebot, Bingbot, GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot, Applebot, YandexBot, DuckDuckBot.
- `static/llms.txt` — llmstxt.org format overview + key URLs.
- `static/humans.txt`, `sitemap.xml` (auto, `changefreq: weekly`).
- JSON-LD in `docusaurus.config.ts`: `WebSite`, `Organization`, `SoftwareApplication` (free `HealthApplication`).
- Per-page front-matter: distinct title, meta description, keywords, tags, `last_update`, OG image.
- Content pattern per feature page: **definition-first intro → use cases → step-by-step → examples → tips → FAQ → "what this does NOT do" honest-framing block → related links**. Keep this pattern for every new page.

Diagnostic + fix playbook: `~/.claude/rules/seo-aeo-ranking.md`. Last applied: 2026-05-29.

---

## Honesty rule (content)

PregnancyPal is a **tracking/organization companion — NOT a substitute for prenatal care**, does **not diagnose**, does **not alert** the user to call a provider, and does **not predict outcomes**. Every clinical-adjacent page must keep an explicit "what this does NOT do" section. Never add fabricated medical claims, statistics, or outcome guarantees.

---

## Portfolio Info File — Weekly Update Rule
- Canonical portfolio info file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/PREGNANCY-PAL-DOCS_portfolio-info_2026-05-29.md`
- Update at least once per week (and on any material change). Keep the last-updated date in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

---

## Package Manager Hierarchy: nvm → npm (global) → yarn (local) (IRON-SOLID)

Three tiers, each tool ONLY for its tier — for the best, most reproducible dev results:
- **`nvm`** → install/update Node.js (which bundles `npm`): `nvm install --lts`. Use nvm to get/update `npm` itself.
- **`npm`** → ALL global packages: `npm install -g yarn` (install yarn globally if missing) + `npm install -g <pkg>` (every other global CLI).
- **`yarn`** → ALL local project work: `yarn`, `yarn add <pkg>`, `yarn add -D <pkg>` inside the project.

❌ NEVER use `npm`/`pnpm` for LOCAL installs. NEVER use `pnpm` at all. ✅ Only `yarn.lock` in the project — delete `package-lock.json` and `pnpm-lock.yaml`.

---

## Package Upgrades: Use `npm-check-updates`
For dependency upgrades use `npx -y npm-check-updates -u && yarn install` (latest STABLE), NOT `yarn upgrade --latest`. Full rule in global `~/.claude/CLAUDE.md`. Last applied: 2026-05-29 (no-op — already on Docusaurus 3.10.1 / React 19.2 / TS 6.0.3).

---

## CLAUDE.md ↔ AGENTS.md sync

Every rule here is mirrored in `CLAUDE.md`. Update one → update the other.
