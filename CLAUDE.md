# PregnancyPal Docs — Project Instructions

**Last Updated**: 2026-06-23

Public user documentation site for **PregnancyPal** (the maternal-wellness app). This repo is the **only public, indexable surface** for the product — the app's own source lives in a separate private repository.

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

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

This project has **its own public GitHub repo**: `github.com/aoneahsan/pregnancy-pal-docs` (remote name `o`, branch `main`). Commit + push directly here (one commit per prompt, then `git push o main`). It is a standalone repo — not a submodule/gitlink of `01-code`. (Created 2026-06-08; flipped **public** 2026-06-23 per the fleet docs-public policy — docs sites are public for free GitHub Pages; the app's code repo stays private.)

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

`onBrokenLinks: 'warn'`. All content batches (1–11) are written (2026-06-23): getting-started, pregnancy tracking, tools, vitals, wellness, diet & appointments, period/fertility/community, notifications/content/reporting, account/settings, mobile/extension, and help/legal/glossary — 68 doc pages, building with **zero broken links**. Keep new pages to the established per-page pattern (definition-first intro → use cases → how-to → examples → tips → FAQ → "what this does NOT do" → related) with `last_update` + author footer.

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

## Share Feature — Web + Mobile Contract (IRON-SOLID)

All user-facing "share" actions follow the global contract: **web** (any browser, incl. mobile web) opens an in-app `WebShareModal` — a social grid (X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, Email web-intents) + a copy-link button; **native** (Capacitor) uses the OS share sheet via `@capacitor/share`. The web-vs-native split is decided at button-click via `Capacitor.isNativePlatform()`. ❌ Never use `navigator.share` as the primary web path with a silent clipboard fallback. **Full spec: `~/.claude/rules/share-feature.md`.**

---

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

---

## CLAUDE.md ↔ AGENTS.md sync

Every rule here is mirrored in `AGENTS.md`. Update one → update the other.
