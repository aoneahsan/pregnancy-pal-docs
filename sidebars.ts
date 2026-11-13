import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: ['getting-started/sign-in', 'getting-started/today'],
    },
    {
      type: 'category',
      label: 'Your record',
      collapsed: false,
      items: [
        'record/logging',
        'record/visits',
        'record/visit-report',
        'record/medication',
        'record/cycle',
        'record/baby',
        'record/partner',
      ],
    },
    {
      type: 'category',
      label: 'Looking after you',
      items: ['care/food', 'care/exercise', 'care/guides', 'care/wellness', 'care/suggestions', 'care/speak'],
    },
    'community',
    'plans',
    {
      type: 'category',
      label: 'White-label and licensing',
      link: { type: 'doc', id: 'white-label/index' },
      items: [
        'white-label/delivered',
        'white-label/setup',
        'white-label/updates',
        'white-label/verify',
        'white-label/faq',
      ],
    },
    {
      type: 'category',
      label: 'Coming from another app',
      link: { type: 'doc', id: 'compare/index' },
      items: [
        'compare/flo',
        'compare/clue',
        'compare/ovia',
        'compare/what-to-expect',
        'compare/babycenter',
        'compare/the-bump',
        'compare/pregnancy-plus',
        'compare/nurture',
        'compare/sprout',
        'compare/huckleberry',
        'compare/stardust',
      ],
    },
    {
      type: 'category',
      label: 'Your account',
      items: ['account/your-data', 'account/old-record', 'account/appearance'],
    },
    {
      type: 'category',
      label: 'Help',
      items: ['help/offline-and-updates', 'help/faq', 'help/contact'],
    },
  ],
};

export default sidebars;
