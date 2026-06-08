import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/sign-up',
        'getting-started/onboarding',
        'getting-started/dashboard-tour',
      ],
    },
    {
      type: 'category',
      label: '🤰 Pregnancy Tracking',
      collapsible: true,
      collapsed: false,
      items: [
        'features/pregnancy-tracking/week-by-week',
        'features/pregnancy-tracking/milestones',
        'features/pregnancy-tracking/baby-development',
        'features/pregnancy-tracking/maternal-changes',
        'features/pregnancy-profile',
        'features/dashboard',
      ],
      link: {
        type: 'generated-index',
        title: 'Pregnancy Tracking',
        description:
          'Week-by-week tracking, milestones, baby development, maternal changes, your pregnancy profile, and the dashboard hub.',
      },
    },
    {
      type: 'category',
      label: '🛠 Practical Tools',
      collapsible: true,
      collapsed: false,
      items: [
        'features/tools/kick-counter',
        'features/tools/contractions-timer',
      ],
      link: {
        type: 'generated-index',
        title: 'Practical Tools',
        description:
          'Calm, one-tap tools for moments that matter — kick counter and contractions timer.',
      },
    },
    {
      type: 'category',
      label: '📋 Vitals & Symptom Tracking',
      collapsible: true,
      collapsed: false,
      items: [
        'features/tracking/blood-pressure',
        'features/tracking/glucose',
        'features/tracking/temperature',
        'features/tracking/weight',
        'features/tracking/symptoms',
      ],
      link: {
        type: 'generated-index',
        title: 'Vitals & Symptom Tracking',
        description:
          'Blood pressure, glucose, temperature, weight, and symptoms — log, see trends, export PDF for your provider.',
      },
    },
    {
      type: 'category',
      label: '💚 Wellness',
      collapsible: true,
      collapsed: false,
      items: [
        'features/wellness/water-intake',
        'features/wellness/medications',
        'features/wellness/eye-breaks',
        'features/wellness/posture',
        'features/wellness/movement',
        'features/wellness/exercise',
        'features/wellness/mood-tracking',
      ],
      link: {
        type: 'generated-index',
        title: 'Wellness',
        description:
          'Daily-rhythm helpers — water, medications, eye breaks, posture, movement, exercise, and mood tracking.',
      },
    },
    {
      type: 'category',
      label: '🥗 Diet & Appointments',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Diet & Appointments',
        description:
          'Meal planning, dietary restrictions, condition-aware nutrition, appointment scheduling and reminders. Coming in Batch 5.',
      },
    },
    {
      type: 'category',
      label: '🌸 Period & Fertility & Community',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Period, Fertility & Community',
        description:
          'Cycle tracking, ovulation prediction, conception window, pre-pregnancy mode, week-cohort communities. Coming in Batch 6.',
      },
    },
    {
      type: 'category',
      label: '🔔 Notifications & Reporting',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Notifications & Reporting',
        description:
          'Push notifications, preferences, quiet hours, blog reading, quizzes & calculators, health PDF export. Coming in Batch 7.',
      },
    },
    {
      type: 'category',
      label: '⚙️ Account & Settings',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Account & Settings',
        description:
          'Profile, security, data export, account deletion, theme customizer, units, language. Coming in Batch 8.',
      },
    },
    {
      type: 'category',
      label: '📱 Mobile & Browser Extension',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Mobile & Browser Extension',
        description:
          'Install on Android / iOS, offline mode, deep linking, share & PDF, browser extension popup and options. Coming in Batch 9.',
      },
    },
    {
      type: 'category',
      label: '❓ Help & Legal',
      collapsible: true,
      collapsed: true,
      items: [],
      link: {
        type: 'generated-index',
        title: 'Help & Legal',
        description:
          'FAQ, troubleshooting, contact support, privacy, terms, data handling. Coming in Batch 10.',
      },
    },
    {
      type: 'category',
      label: 'ℹ️ About',
      collapsible: true,
      collapsed: false,
      items: ['about/credits'],
    },
  ],
};

export default sidebars;
