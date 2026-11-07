import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import HomepageHero from '@site/src/components/HomepageHero';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Pregnancy Pal docs: how each part of your record works"
      description="The guide to Pregnancy Pal: your record before, during and after pregnancy, visits, the visit report, medication, your partner and your data."
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
