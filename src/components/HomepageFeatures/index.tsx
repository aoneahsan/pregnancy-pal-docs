import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Feature = {
  emoji: string;
  title: string;
  description: string;
  to: string;
};

const FEATURES: Feature[] = [
  {
    emoji: '📅',
    title: 'Week-by-week tracking',
    description:
      'See where you are in your pregnancy (1–42+), what is happening this week, and what to expect next — keyed to your last period.',
    to: '/docs/getting-started/onboarding',
  },
  {
    emoji: '👶',
    title: 'Kick counter',
    description:
      'A calm, single-tap kick counter with session history. Helps you stay aware of fetal movement without anxiety.',
    to: '/docs/intro',
  },
  {
    emoji: '⏱',
    title: 'Contractions timer',
    description:
      'Time contractions with one tap. See duration and intervals at a glance. Export the log to share with your provider.',
    to: '/docs/intro',
  },
  {
    emoji: '🥗',
    title: 'Personalized meal plans',
    description:
      'Daily plans adapted to your trimester, conditions, and dietary preferences. Vegetarian, vegan, gluten-free, allergies — all accounted for.',
    to: '/docs/intro',
  },
  {
    emoji: '📋',
    title: 'Health vitals logging',
    description:
      'Track blood pressure, glucose, weight, temperature, and symptoms with simple charts and export-to-PDF for your provider.',
    to: '/docs/intro',
  },
  {
    emoji: '📆',
    title: 'Appointment management',
    description:
      'Schedule visits, get reminders 24 hours ahead, and export an appointment list as a PDF for your records.',
    to: '/docs/intro',
  },
  {
    emoji: '🌐',
    title: 'Community by week',
    description:
      'Join your week-cohort to talk with people due around the same time. Anonymous posting available for sensitive topics.',
    to: '/docs/intro',
  },
  {
    emoji: '🔔',
    title: 'Smart notifications',
    description:
      'Daily tips, milestone celebrations, appointment reminders, and diet plans — opt in to exactly the ones you want.',
    to: '/docs/intro',
  },
  {
    emoji: '📱',
    title: 'Web + Android + iOS + extension',
    description:
      'One product across four surfaces with offline support on mobile. Your data syncs automatically when you reconnect.',
    to: '/docs/intro',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.kicker}>What's inside</span>
          <h2 className={styles.title}>Every tool you need, in one calm place.</h2>
          <p className={styles.intro}>
            PregnancyPal is built to feel like a friend who already knows what
            you're going through — practical tools, honest content, and zero
            scary marketing fluff.
          </p>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <Link key={feature.title} to={feature.to} className={styles.card}>
              <div className={styles.cardEmoji} aria-hidden="true">
                {feature.emoji}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              <span className={styles.cardLink}>Read more →</span>
            </Link>
          ))}
        </div>
        <div className={styles.note}>
          <strong>Honest framing:</strong> PregnancyPal is a tracking and
          organization companion. It is <em>not</em> a substitute for prenatal
          care, does not diagnose, and does not replace your provider's
          guidance. Always check with your healthcare provider for medical
          decisions.
        </div>
      </div>
    </section>
  );
}
