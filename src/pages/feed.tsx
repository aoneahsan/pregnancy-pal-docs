import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import docs from './doc-list.json';

export default function DocsFeed(): ReactNode {
  return (
    <Layout title="What’s new in the docs" description="The Pregnancy Pal docs as a feed: what each page covers and when it last changed.">
      <main className="container margin-vert--xl">
        <h1>What’s new in the docs</h1>
        <p>These pages last changed on November 7, 2026, when the docs were rewritten for the rebuilt app. Readers can follow /feed.xml.</p>
        <ul>
          {docs.map((doc) => (
            <li key={doc.to}>
              <Link to={doc.to}>{doc.title}</Link>: {doc.description}
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}
