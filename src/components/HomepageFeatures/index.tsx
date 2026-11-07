import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const PLACES = [
  { title: 'Your record', text: 'Readings, visits, medication, periods and the baby, each with its own page.', to: '/docs/record/logging' },
  { title: 'The visit report', text: 'One page for your doctor, built from your record, with your questions first.', to: '/docs/record/visit-report' },
  { title: 'Sharing with a partner', text: 'Nothing is shared until you switch it on, one part at a time.', to: '/docs/record/partner' },
  { title: 'No signal', text: 'What you can still read and log, and how it syncs with no duplicates.', to: '/docs/help/offline-and-updates' },
  { title: 'Your data', text: 'Export it or delete it, free on every plan.', to: '/docs/account/your-data' },
  { title: 'Coming from another app', text: 'How we differ from Flo, Clue, Ovia and others, and how to start here.', to: '/docs/compare' },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Where to look</h2>
        <div className={styles.grid}>
          {PLACES.map((place) => (
            <Link key={place.to} to={place.to} className={styles.card}>
              <h3 className={styles.cardTitle}>{place.title}</h3>
              <p className={styles.cardText}>{place.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
