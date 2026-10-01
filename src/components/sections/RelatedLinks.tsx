import Link from 'next/link';
import { services } from '@/content/services';
import { areas } from '@/content/areas';
import { getBlogFrontmatterBySlug } from '@/lib/content';
import { humanizeSlug } from '@/lib/strings';
import type { Service } from '@/types/content';
import styles from './RelatedLinks.module.scss';

type Props = {
  service: Service;
};

// Internal linking for a service page — see docs/02-peta-seo-halaman.md section 4:
// at least 2 related services, related blog posts, and any published area pages.
export function RelatedLinks({ service }: Props) {
  const relatedServices = service.relatedServices
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is Service => Boolean(item));

  const publishedAreas = areas.filter((area) => area.published);

  if (relatedServices.length === 0 && service.relatedPosts.length === 0 && publishedAreas.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        {relatedServices.length > 0 ? (
          <div>
            <h2 className={styles.heading}>Related Services</h2>
            <ul className={styles.list}>
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link href={related.path}>{related.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {service.relatedPosts.length > 0 ? (
          <div>
            <h2 className={styles.heading}>Related Reading</h2>
            <ul className={styles.list}>
              {service.relatedPosts.map((slug) => {
                const frontmatter = getBlogFrontmatterBySlug(slug);
                return (
                  <li key={slug}>
                    <Link href={`/blog/${slug}/`}>{frontmatter?.title ?? humanizeSlug(slug)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        {publishedAreas.length > 0 ? (
          <div>
            <h2 className={styles.heading}>Service Areas</h2>
            <ul className={styles.list}>
              {publishedAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={area.path}>{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
