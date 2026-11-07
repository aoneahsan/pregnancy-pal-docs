import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const RINGS = [
  ['oklch(0.52 0.19 2)', 118],
  ['oklch(0.62 0.17 20)', 100],
  ['oklch(0.74 0.15 38)', 80],
  ['oklch(0.82 0.14 65)', 58],
  ['oklch(0.9 0.13 90)', 34],
] as const;

export default function HomepageHero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <div>
          <p className={styles.label}>Pregnancy Pal docs</p>
          <h1 className={styles.title}>How each part of your record works.</h1>
          <p className={styles.lead}>
            One record for before, during and after pregnancy. This is where to look when you want
            to know what a page does, what it keeps and who can see it.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primary} to="/docs/intro">
              Read the docs
            </Link>
            <Link className={styles.secondary} href="https://pregnancypal.aoneahsan.com">
              Open the app
            </Link>
          </div>
          <p className={styles.note}>
            It keeps your record and can make suggestions from it. It doesn&rsquo;t diagnose or
            treat.
          </p>
        </div>
        <svg className={styles.disc} viewBox="0 0 240 240" aria-hidden="true">
          {RINGS.map(([fill, radius]) => (
            <circle key={radius} cx="120" cy="120" r={radius} fill={fill} />
          ))}
        </svg>
      </div>
    </header>
  );
}
