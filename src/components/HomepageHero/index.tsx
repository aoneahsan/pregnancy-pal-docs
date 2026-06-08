import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageHero(): ReactNode {
  return (
    <header className={clsx(styles.hero)}>
      <div className={styles.heroBackdrop} aria-hidden="true" />
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Documentation · v1.0</span>
          <h1 className={styles.title}>
            A warm, week-by-week
            <br />
            <span className={styles.gradientText}>pregnancy companion.</span>
          </h1>
          <p className={styles.subtitle}>
            PregnancyPal helps you track your weeks, log kicks and contractions,
            plan meals around your trimester, stay on top of appointments, and
            celebrate every milestone — across web, Android, iOS, and a browser
            extension.
          </p>
          <p className={styles.subtitleSmall}>
            This site is the complete user guide. Every feature, every option,
            explained in plain language.
          </p>
          <div className={styles.ctaRow}>
            <Link
              className={clsx('button button--primary button--lg', styles.ctaPrimary)}
              to="/docs/intro"
            >
              📖 Read the docs
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.ctaSecondary)}
              href="https://pregnancypal.aoneahsan.com"
            >
              🌸 Open the App
            </Link>
          </div>
          <p className={styles.fineprint}>
            PregnancyPal is built and maintained by{' '}
            <a href="https://aoneahsan.com" target="_blank" rel="noopener">
              Ahsan Mahmood
            </a>
            . Free for individuals. Not a substitute for prenatal care.
          </p>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.glowRing} />
          <svg
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.heroLogo}
            role="presentation"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
              <linearGradient id="heroSoft" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FCE4EC" stopOpacity="1" />
              </linearGradient>
            </defs>
            <rect width="240" height="240" rx="48" fill="url(#heroGrad)" />
            <path
              d="M120 200 C120 200 60 156 60 110 C60 84 78 70 96 70 C110 70 120 80 120 80 C120 80 130 70 144 70 C162 70 180 84 180 110 C180 156 120 200 120 200 Z"
              fill="url(#heroSoft)"
              opacity="0.96"
            />
            <g transform="translate(96, 78)">
              <circle cx="24" cy="14" r="11" fill="#E91E63" />
              <ellipse cx="24" cy="46" rx="16" ry="20" fill="#E91E63" />
              <ellipse cx="24" cy="50" rx="12" ry="14" fill="#F06292" opacity="0.65" />
              <ellipse cx="11" cy="38" rx="5" ry="13" fill="#E91E63" transform="rotate(-20 11 38)" />
              <ellipse cx="37" cy="38" rx="5" ry="13" fill="#E91E63" transform="rotate(20 37 38)" />
            </g>
            <g opacity="0.55">
              <circle cx="42" cy="56" r="3" fill="#FFFFFF" />
              <circle cx="200" cy="74" r="2.5" fill="#FFFFFF" />
              <circle cx="58" cy="184" r="2" fill="#FFFFFF" />
              <circle cx="194" cy="172" r="3" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}
