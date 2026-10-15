import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { buildBlogJsonLd } from '@/lib/jsonld';
import { getAllBlogPosts } from '@/lib/content';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BlogPostCard } from '@/components/sections/BlogPostCard';
import { CtaSection } from '@/components/sections/CtaSection';
import styles from './page.module.scss';

const TITLE = 'Roofing Tips for Idaho Homeowners | Canyon Construction Services';
const DESCRIPTION =
  'Practical roofing advice for Twin Falls and Magic Valley homeowners from the team at Canyon Construction Services.';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/blog/',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main>
      <JsonLd
        data={buildBlogJsonLd({
          name: 'Roofing Tips for Idaho Homeowners',
          description: DESCRIPTION,
          path: '/blog/',
          posts: posts.map((post) => ({
            title: post.title,
            path: `/blog/${post.slug}/`,
            datePublished: post.date,
          })),
        })}
      />

      <div className="container">
        <Breadcrumbs items={[{ name: 'Blog', path: '/blog/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>Roofing Tips for Idaho Homeowners</h1>
        <p className={styles.lead}>{DESCRIPTION}</p>
      </section>

      <section className={`section ${styles.listing}`}>
        <div className={`container ${styles.grid}`}>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
