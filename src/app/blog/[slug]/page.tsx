import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { buildBlogPostingJsonLd } from '@/lib/jsonld';
import { getAllBlogSlugs, getBlogPost, getRelatedBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/strings';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Prose } from '@/components/ui/Prose';
import { ArticleRelatedLinks } from '@/components/sections/ArticleRelatedLinks';
import { CtaSection } from '@/components/sections/CtaSection';
import styles from './page.module.scss';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const { frontmatter } = post;
  return buildMetadata({
    title: frontmatter.metaTitle ?? frontmatter.title,
    description: frontmatter.description,
    path: `/blog/${slug}/`,
    image: frontmatter.image ?? undefined,
    article: {
      publishedTime: frontmatter.date,
      modifiedTime: frontmatter.updated,
      author: frontmatter.author,
    },
  });
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const { content, frontmatter } = post;
  const path = `/blog/${slug}/`;
  const relatedPosts = getRelatedBlogPosts(slug, frontmatter.relatedServices);

  return (
    <main>
      <JsonLd
        data={buildBlogPostingJsonLd({
          title: frontmatter.title,
          description: frontmatter.description,
          path,
          datePublished: frontmatter.date,
          dateModified: frontmatter.updated,
          author: frontmatter.author,
          image: frontmatter.image,
        })}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { name: 'Blog', path: '/blog/' },
            { name: frontmatter.title, path },
          ]}
        />
      </div>

      <article>
        <header className={`container ${styles.header}`}>
          <div className={styles.column}>
            <h1 className={styles.title}>{frontmatter.title}</h1>
            <p className={styles.meta}>
              <span>
                Published <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
              </span>
              {frontmatter.updated ? (
                <span>
                  Updated{' '}
                  <time dateTime={frontmatter.updated}>{formatDate(frontmatter.updated)}</time>
                </span>
              ) : null}
              <span>By {frontmatter.author}</span>
            </p>
            {frontmatter.image ? (
              <div className={styles.media}>
                <Image
                  src={frontmatter.image.src}
                  alt={frontmatter.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 72rem, 100vw"
                />
              </div>
            ) : null}
          </div>
        </header>

        <div className={`container ${styles.content}`}>
          <Prose>{content}</Prose>
        </div>
      </article>

      <ArticleRelatedLinks
        relatedServices={frontmatter.relatedServices}
        relatedPosts={relatedPosts}
      />

      <CtaSection />
    </main>
  );
}
