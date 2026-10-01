import Link from 'next/link';
import { site } from '@/content/site';
import { reviews } from '@/content/reviews';
import { ExternalLinkIcon } from '@/components/ui/icons/ExternalLinkIcon';
import { ReviewCard, REVIEW_TEXT_MAX_LENGTH } from './ReviewCard';
import styles from './ReviewsSection.module.scss';

const MAX_REVIEWS_SHOWN = 6;

// Renders nothing until reviews.ts has entries — see docs/06-pertanyaan-terbuka.md #11.
export function ReviewsSection() {
  if (reviews.length === 0) return null;

  const featured = reviews.filter((review) => review.featured);
  const selected = (featured.length > 0 ? featured : reviews).slice(0, MAX_REVIEWS_SHOWN);

  return (
    <section className="section section--alt">
      <div className={`container ${styles.header}`}>
        <h2 className={styles.heading}>What Twin Falls Homeowners Say</h2>
        {site.rating ? (
          <p className={styles.rating}>
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            {site.rating.value.toFixed(1)} stars on Google ({site.rating.count} reviews)
          </p>
        ) : null}
      </div>
      <div className="container">
        <ul className={styles.list}>
          {selected.map((review) => (
            <ReviewCard key={review.id} review={review} maxLength={REVIEW_TEXT_MAX_LENGTH} />
          ))}
        </ul>
      </div>
      <p className={`container ${styles.footer}`}>
        <Link href="/reviews/">Read more reviews</Link>
        {site.googleBusinessProfileUrl ? (
          <a
            href={site.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Google in a new tab"
          >
            See all reviews on Google
            <ExternalLinkIcon className={styles.externalIcon} />
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        ) : null}
      </p>
    </section>
  );
}
