import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): ReactNode {
  return (
    <Layout
      title="PregnancyPal Documentation — Your warm, week-by-week pregnancy companion"
      description="The complete user guide for PregnancyPal: week-by-week tracking, kick counter, contractions timer, meal planning, appointments, community, and notifications across web, Android, iOS, and a browser extension."
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
