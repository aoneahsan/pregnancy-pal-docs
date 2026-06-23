import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_TITLE = 'PregnancyPal Documentation';
const SITE_TAGLINE =
  'Your warm, week-by-week pregnancy companion — guides for every feature in PregnancyPal.';
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

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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

  headTags: [
    // Author + theme color
    { tagName: 'meta', attributes: { name: 'author', content: AUTHOR_NAME } },
    { tagName: 'meta', attributes: { name: 'theme-color', content: '#F472B6' } },
    {
      tagName: 'meta',
      attributes: {
        name: 'application-name',
        content: 'PregnancyPal Docs',
      },
    },
    // Open Graph baseline (per-page can override)
    { tagName: 'meta', attributes: { property: 'og:site_name', content: 'PregnancyPal Documentation' } },
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
        name: 'PregnancyPal Documentation',
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
        name: 'PregnancyPal',
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
        name: 'PregnancyPal',
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
      { name: 'keywords', content: 'pregnancy app, week-by-week pregnancy tracker, kick counter, contractions timer, maternal wellness, pregnancy documentation, PregnancyPal' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PregnancyPal Docs',
      logo: {
        alt: 'PregnancyPal logo',
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
          to: '/docs/about/credits',
          label: 'About',
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
            { label: 'Getting Started', to: '/docs/getting-started/installation' },
            { label: 'Pregnancy Tracking', to: '/docs/features/pregnancy-tracking/week-by-week' },
            { label: 'FAQ', to: '/docs/help/faq' },
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
            { label: 'Donate / Support', href: 'https://aoneahsan.com/payment?project-id=pregnancy-pal&project-identifier=com.aoneahsan.pregnancypal' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PregnancyPal. Built and maintained by <a href="${AUTHOR_URL}" target="_blank" rel="noopener">Ahsan Mahmood</a>. Documentation licensed under MIT.`,
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
