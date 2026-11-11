# PregnancyPal Documentation

Public user documentation for **[PregnancyPal](https://pregnancypal.aoneahsan.com)** — a warm, week-by-week maternal wellness companion app. Built and maintained by **[Ahsan Mahmood](https://aoneahsan.com)**.

> 📚 **Live docs**: [pregnancypal-docs.aoneahsan.com](https://pregnancypal-docs.aoneahsan.com)
> 🌸 **The app**: [pregnancypal.aoneahsan.com](https://pregnancypal.aoneahsan.com)
> 👤 **Author**: Ahsan Mahmood — [aoneahsan.com](https://aoneahsan.com) · [LinkedIn](https://linkedin.com/in/aoneahsan) · [GitHub](https://github.com/aoneahsan) · [NPM](https://npmjs.com/~aoneahsan)

## What this is

This is a [Docusaurus 3](https://docusaurus.io/) site that documents every user-facing feature of PregnancyPal — from creating an account and onboarding through every tracking tool, wellness module, diet plan, appointment, community feature, notification, mobile-only flow, and account setting.

The app's source repository is private. This documentation site is the public, indexable surface for the product, also serving as a backlink to the developer's portfolio.

## Local development

This project uses [Yarn](https://yarnpkg.com/) and runs locally on port **5946**.

```bash
# install once
yarn install

# start the local dev server
yarn start

# typecheck
yarn typecheck

# build for production (output: ./build)
yarn build

# preview the production build
yarn serve
```

Local URL: http://localhost:5946

## Deployment

The site is published by hand: `yarn build`, then the contents of `build/` are committed to the `gh-pages` branch and pushed, and GitHub Pages serves that branch. There is no GitHub Actions workflow. The custom domain is `pregnancypal-docs.aoneahsan.com`; `static/.nojekyll` and `static/CNAME` ride along with every build.

The 2026-10-14 maintenance build passed typecheck and Docusaurus production build, and the fresh site loaded in controlled Chrome at desktop and mobile widths without exceptions or horizontal overflow. Package upgrades remain in the workspace fleet tracker.

## Folder structure

```
.
├── docs/                # All documentation pages (Markdown / MDX)
│   ├── intro.md
│   ├── getting-started/
│   └── about/
├── src/
│   ├── css/custom.css           # Theme tokens, branding, layout polish
│   ├── pages/index.tsx          # Custom branded landing page
│   └── components/
│       ├── HomepageHero/
│       └── HomepageFeatures/
├── static/
│   ├── img/logo.svg             # Pink → violet PregnancyPal mark
│   ├── robots.txt               # AI-bot allowlist
│   └── llms.txt                 # llmstxt.org format
├── docusaurus.config.ts         # Site config + JSON-LD + SEO
├── sidebars.ts                  # Sidebar tree
└── tsconfig.json
```

## Contributing

This documentation tracks the live product. If you're using PregnancyPal and find something documented here that doesn't match the app, please [open an issue](https://github.com/aoneahsan/pregnancy-pal-docs/issues) or email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com).

## Honesty notice

PregnancyPal is **not a substitute for prenatal care or medical advice**. The app helps you track and stay organized; it does not diagnose, predict, or treat. Always consult your healthcare provider for medical decisions.

## License

Documentation content: [MIT](./LICENSE).
