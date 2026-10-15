import Link from 'next/link';
import { services } from '@/content/services';
import { BlogPostCard } from '@/components/sections/BlogPostCard';
import type { BlogPostSummary } from '@/lib/content';
import type { Service } from '@/types/content';
import styles from './ArticleRelatedLinks.module.scss';

type Props = {
  relatedServices: string[];
  relatedPosts: BlogPostSummary[];
};

// Internal linking at the end of an article (docs/02 section 4): blog → service →
// service areas → contact, plus other articles on the same topics.
export function ArticleRelatedLinks({ relatedServices, relatedPosts }: Props) {
  const linkedServices = relatedServices
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));

  return (
    <>
      <section className="section section--alt" aria-labelledby="related-services-heading">
        <div className="container">
          <h2 id="related-services-heading" className={styles.heading}>
            Related Roofing Services
          </h2>
          <ul className={styles.serviceList}>
            {linkedServices.map((service) => (
              <li key={service.slug}>
                <Link href={service.path} className={styles.serviceLink}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.serviceDescription}>{service.shortDescription}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.more}>
            See the <Link href="/service-areas/">communities we serve</Link> across the Magic
            Valley, or <Link href="/contact/">request a free estimate</Link>.
          </p>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="section" aria-labelledby="related-posts-heading">
          <div className="container">
            <h2 id="related-posts-heading" className={styles.heading}>
              More Roofing Tips
            </h2>
            <div className={styles.postGrid}>
              {relatedPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
