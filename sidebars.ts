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
      items: [
        'features/diet/meal-planning',
        'features/diet/dietary-restrictions',
        'features/diet/nutrition-targets',
        'features/diet/condition-aware-plans',
        'features/appointments/scheduling',
        'features/appointments/reminders',
        'features/appointments/export-pdf',
      ],
      link: {
        type: 'generated-index',
        title: 'Diet & Appointments',
        description:
          'Meal planning, dietary restrictions, nutrition targets, an honest note on condition-aware plans, and appointment scheduling, reminders, and PDF export.',
      },
    },
    {
      type: 'category',
      label: '🌸 Period, Fertility & Community',
      collapsible: true,
      collapsed: true,
      items: [
        'features/period/cycle-tracking',
        'features/period/ovulation-prediction',
        'features/fertility/conception-window',
        'features/fertility/pre-pregnancy',
        'features/community/joining-cohorts',
        'features/community/posting-and-anonymous',
        'features/community/safety-and-moderation',
      ],
      link: {
        type: 'generated-index',
        title: 'Period, Fertility & Community',
        description:
          'Cycle tracking, ovulation estimates, the fertile window, using PregnancyPal before pregnancy, and joining and posting in week-cohort communities.',
      },
    },
    {
      type: 'category',
      label: '🔔 Notifications, Content & Reporting',
      collapsible: true,
      collapsed: true,
      items: [
        'features/notifications/push',
        'features/notifications/preferences',
        'features/notifications/quiet-hours',
        'features/blog/reading',
        'features/content/quizzes-calculators',
        'features/reporting/health-export-pdf',
      ],
      link: {
        type: 'generated-index',
        title: 'Notifications, Content & Reporting',
        description:
          'Push notifications, category preferences, quiet hours, reading the blog, the education hub of quizzes and tools, and the health-report PDF export.',
      },
    },
    {
      type: 'category',
      label: '⚙️ Account & Settings',
      collapsible: true,
      collapsed: true,
      items: [
        'features/account/profile',
        'features/account/security',
        'features/account/data-export',
        'features/account/delete-account',
        'features/settings/theme-customizer',
        'features/settings/units',
        'features/settings/language',
      ],
      link: {
        type: 'generated-index',
        title: 'Account & Settings',
        description:
          'Your profile, sign-in and security, exporting your data, deleting your account, the theme customizer, measurement units, and language.',
      },
    },
    {
      type: 'category',
      label: '📱 Mobile & Browser Extension',
      collapsible: true,
      collapsed: true,
      items: [
        'features/mobile/install-android',
        'features/mobile/install-ios',
        'features/mobile/offline-mode',
        'features/mobile/deep-linking',
        'features/mobile/share-and-pdf',
        'features/extension/install',
        'features/extension/popup',
        'features/extension/options',
      ],
      link: {
        type: 'generated-index',
        title: 'Mobile & Browser Extension',
        description:
          'Install on Android, use PregnancyPal on iPhone via the web app, what works offline, deep linking, sharing & PDF, and the Chrome companion extension.',
      },
    },
    {
      type: 'category',
      label: '❓ Help & Support',
      collapsible: true,
      collapsed: true,
      items: ['help/faq', 'help/troubleshooting', 'help/contact-support'],
      link: {
        type: 'generated-index',
        title: 'Help & Support',
        description:
          'Frequently asked questions, troubleshooting common issues, and every way to reach support.',
      },
    },
    {
      type: 'category',
      label: '📄 Privacy, Terms & Data',
      collapsible: true,
      collapsed: true,
      items: ['legal/privacy', 'legal/terms', 'legal/data-handling'],
      link: {
        type: 'generated-index',
        title: 'Privacy, Terms & Data',
        description:
          'Plain-language summaries of the privacy policy, terms, and how your data is stored — the in-app pages remain the binding documents.',
      },
    },
    {
      type: 'category',
      label: 'ℹ️ About',
      collapsible: true,
      collapsed: false,
      items: ['about/credits', 'about/glossary'],
    },
  ],
};

export default sidebars;
