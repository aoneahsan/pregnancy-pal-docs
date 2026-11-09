import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_TITLE = 'Pregnancy Pal Docs';
const SITE_TAGLINE =
  'One record for before, during and after pregnancy: how each part of Pregnancy Pal works.';
const SITE_URL = process.env.SITE_URL || 'https://pregnancypal-docs.aoneahsan.com';
const BASE_URL = process.env.BASE_URL || '/';
const APP_URL = 'https://pregnancypal.aoneahsan.com';
const ORG_GITHUB = 'https://github.com/aoneahsan';
const REPO_URL = `${ORG_GITHUB}/pregnancy-pal-docs`;
const AUTHOR_NAME = 'Ahsan Mahmood';
const AUTHOR_URL = 'https://aoneahsan.com';
const AUTHOR_EMAIL = 'aoneahsan@gmail.com';
const AUTHOR_LINKEDIN = 'https://linkedin.com/in/aoneahsan';

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: BASE_URL,

  organizationName: 'aoneahsan',
  projectName: 'pregnancy-pal-docs',

  onBrokenLinks: 'throw',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          editUrl: `${REPO_URL}/edit/main/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          lastmod: 'date',
          ignorePatterns: ['/docs/tags/**', '/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Addresses from the old docs, so nothing already indexed or bookmarked breaks.
        redirects: [
        { from: '/docs/about/credits', to: '/docs/intro' },
        { from: '/docs/about/glossary', to: '/docs/intro' },
        { from: '/docs/features/account/data-export', to: '/docs/account/your-data' },
        { from: '/docs/features/account/delete-account', to: '/docs/account/your-data' },
        { from: '/docs/features/account/profile', to: '/docs/account/your-data' },
        { from: '/docs/features/account/security', to: '/docs/account/your-data' },
        { from: '/docs/features/appointments/export-pdf', to: '/docs/record/visit-report' },
        { from: '/docs/features/appointments/reminders', to: '/docs/record/visits' },
        { from: '/docs/features/appointments/scheduling', to: '/docs/record/visits' },
        { from: '/docs/features/blog/reading', to: '/docs/care/guides' },
        { from: '/docs/features/community/joining-cohorts', to: '/docs/community' },
        { from: '/docs/features/community/posting-and-anonymous', to: '/docs/community' },
        { from: '/docs/features/community/safety-and-moderation', to: '/docs/community' },
        { from: '/docs/features/content/quizzes-calculators', to: '/docs/care/guides' },
        { from: '/docs/features/dashboard', to: '/docs/getting-started/today' },
        { from: '/docs/features/extension/install', to: '/docs/intro' },
        { from: '/docs/features/extension/options', to: '/docs/intro' },
        { from: '/docs/features/extension/popup', to: '/docs/intro' },
        { from: '/docs/features/fertility/conception-window', to: '/docs/record/cycle' },
        { from: '/docs/features/fertility/pre-pregnancy', to: '/docs/record/cycle' },
        { from: '/docs/features/pregnancy-profile', to: '/docs/getting-started/sign-in' },
        { from: '/docs/features/pregnancy-tracking/baby-development', to: '/docs/getting-started/today' },
        { from: '/docs/features/pregnancy-tracking/maternal-changes', to: '/docs/getting-started/today' },
        { from: '/docs/features/pregnancy-tracking/milestones', to: '/docs/getting-started/today' },
        { from: '/docs/features/pregnancy-tracking/week-by-week', to: '/docs/getting-started/today' },
        { from: '/docs/features/reporting/health-export-pdf', to: '/docs/record/visit-report' },
        { from: '/docs/features/settings/language', to: '/docs/account/appearance' },
        { from: '/docs/features/settings/theme-customizer', to: '/docs/account/appearance' },
        { from: '/docs/features/settings/units', to: '/docs/account/appearance' },
        { from: '/docs/features/tools/contractions-timer', to: '/docs/record/logging' },
        { from: '/docs/features/tools/kick-counter', to: '/docs/record/logging' },
        { from: '/docs/features/tracking/blood-pressure', to: '/docs/record/logging' },
        { from: '/docs/features/tracking/glucose', to: '/docs/record/logging' },
        { from: '/docs/features/tracking/symptoms', to: '/docs/record/logging' },
        { from: '/docs/features/tracking/temperature', to: '/docs/record/logging' },
        { from: '/docs/features/tracking/weight', to: '/docs/record/logging' },
        { from: '/docs/features/wellness/exercise', to: '/docs/care/exercise' },
        { from: '/docs/features/wellness/eye-breaks', to: '/docs/care/wellness' },
        { from: '/docs/features/wellness/medications', to: '/docs/record/medication' },
        { from: '/docs/features/wellness/mood-tracking', to: '/docs/care/wellness' },
        { from: '/docs/features/wellness/movement', to: '/docs/care/wellness' },
        { from: '/docs/features/wellness/posture', to: '/docs/care/wellness' },
        { from: '/docs/features/wellness/water-intake', to: '/docs/care/wellness' },
        { from: '/docs/getting-started/dashboard-tour', to: '/docs/getting-started/today' },
        { from: '/docs/getting-started/installation', to: '/docs/getting-started/sign-in' },
        { from: '/docs/getting-started/onboarding', to: '/docs/getting-started/sign-in' },
        { from: '/docs/getting-started/sign-up', to: '/docs/getting-started/sign-in' },
        { from: '/docs/help/contact-support', to: '/docs/help/contact' },
        { from: '/docs/help/troubleshooting', to: '/docs/help/offline-and-updates' },
        { from: '/docs/legal/data-handling', to: '/docs/help/contact' },
        { from: '/docs/legal/privacy', to: '/docs/help/contact' },
        { from: '/docs/legal/terms', to: '/docs/help/contact' },
        { from: '/docs/features/diet/condition-aware-plans', to: '/docs/care/food' },
        { from: '/docs/features/diet/dietary-restrictions', to: '/docs/care/food' },
        { from: '/docs/features/diet/meal-planning', to: '/docs/care/food' },
        { from: '/docs/features/diet/nutrition-targets', to: '/docs/care/food' },
        { from: '/docs/features/mobile/deep-linking', to: '/docs/intro' },
        { from: '/docs/features/mobile/install-android', to: '/docs/intro' },
        { from: '/docs/features/mobile/install-ios', to: '/docs/intro' },
        { from: '/docs/features/mobile/offline-mode', to: '/docs/help/offline-and-updates' },
        { from: '/docs/features/mobile/share-and-pdf', to: '/docs/record/visit-report' },
        { from: '/docs/features/notifications/preferences', to: '/docs/care/wellness' },
        { from: '/docs/features/notifications/push', to: '/docs/care/wellness' },
        { from: '/docs/features/notifications/quiet-hours', to: '/docs/care/wellness' },
        { from: '/docs/features/period/cycle-tracking', to: '/docs/record/cycle' },
        { from: '/docs/features/period/ovulation-prediction', to: '/docs/record/cycle' },
        ],
      },
    ],
  ],

  headTags: [
    { tagName: 'meta', attributes: { name: 'yandex-verification', content: 'bfb02722189028cf' } },
    // Author + theme color
    { tagName: 'meta', attributes: { name: 'author', content: AUTHOR_NAME } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#F472B6' } },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'Pregnancy Pal Docs',
      },
    },
    // Open Graph baseline (per-page can override)
    { tagName: 'meta', attributes: { property: 'og:site_name', content: 'Pregnancy Pal Documentation' } },
    { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
    { tagName: 'meta', attributes: { property: 'og:locale', content: 'en_US' } },
    // Twitter card baseline
    { tagName: 'meta', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
    { tagName: 'meta', attributes: { name: 'twitter:creator', content: '@aoneahsan' } },
    // JSON-LD: WebSite
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Pregnancy Pal Documentation',
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    // JSON-LD: Organization (with Ahsan as author)
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pregnancy Pal',
        url: APP_URL,
        logo: `${SITE_URL}/img/logo.svg`,
        founder: {
          '@type': 'Person',
          name: AUTHOR_NAME,
          email: AUTHOR_EMAIL,
          url: AUTHOR_URL,
          sameAs: [AUTHOR_LINKEDIN, ORG_GITHUB, 'https://npmjs.com/~aoneahsan'],
        },
      }),
    },
    // JSON-LD: SoftwareApplication
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Pregnancy Pal',
        operatingSystem: 'Web, Android',
        applicationCategory: 'HealthApplication',
        url: APP_URL,
        author: {
          '@type': 'Person',
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      }),
    },
  ],

  themeConfig: {
    image: 'img/og-image.png',
    metadata: [
      { name: 'keywords', content: 'pregnancy record, period tracker, kick counter, contraction timer, medication reminders, visit report, baby tracker' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Pregnancy Pal Docs',
      logo: {
        alt: 'Pregnancy Pal logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/plans',
          label: 'Plans',
          position: 'left',
        },
        {
          href: APP_URL,
          label: 'Open the App ↗',
          position: 'right',
        },
        {
          href: REPO_URL,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting started', to: '/docs/getting-started/sign-in' },
            { label: 'Your record', to: '/docs/record/logging' }, { label: 'Coming from another app', to: '/docs/compare' },
            { label: 'Questions', to: '/docs/help/faq' }, { label: 'Sitemap', to: '/sitemap' }, { label: 'Feed', to: '/feed' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the App', href: APP_URL },
            { label: 'Privacy', href: `${APP_URL}/privacy` },
            { label: 'Terms', href: `${APP_URL}/terms` },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'Portfolio', href: AUTHOR_URL },
            { label: 'LinkedIn', href: AUTHOR_LINKEDIN },
            { label: 'GitHub', href: ORG_GITHUB },
            { label: 'NPM', href: 'https://npmjs.com/~aoneahsan' },
            { label: 'Email', href: `mailto:${AUTHOR_EMAIL}` },
          ],
        },
        {
          title: 'Support the project',
          items: [
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pregnancy Pal. Built and maintained by <a href="${AUTHOR_URL}" target="_blank" rel="noopener">Ahsan Mahmood</a>. Documentation licensed under MIT.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
