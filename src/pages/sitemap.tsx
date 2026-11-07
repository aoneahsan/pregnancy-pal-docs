import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import docs from './doc-list.json';

export default function DocsSitemap(): ReactNode {
  return (
    <Layout title="Every page in the docs" description="Every page in the Pregnancy Pal docs, in one list.">
      <main className="container margin-vert--xl">
        <h1>Every page in the docs</h1>
        <p>Every page in the Pregnancy Pal docs, in one list. The same list for machines is at /sitemap.xml.</p>
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
