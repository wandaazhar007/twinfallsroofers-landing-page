import type { Metadata } from 'next';
import { site } from '@/content/site';
import { reviews } from '@/content/reviews';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ReviewCard, REVIEW_TEXT_MAX_LENGTH } from '@/components/sections/ReviewCard';
import { Button } from '@/components/ui/Button';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Roofing Reviews in Twin Falls, ID | Canyon Construction Services',
  description:
    'Read reviews from Twin Falls and Magic Valley customers of Canyon Construction Services, rated 4.9 stars on Google.',
  path: '/reviews/',
});

// Only real reviews from reviews.ts are shown — see docs/06-pertanyaan-terbuka.md #11.
export default function ReviewsPage() {
  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Reviews', path: '/reviews/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>What Twin Falls Homeowners Say About Us</h1>
        <p className={styles.lead}>
          Real reviews from customers in Twin Falls and the Magic Valley.
        </p>

        {site.rating ? (
          <p className={styles.rating}>
            {site.rating.value.toFixed(1)} stars on Google ({site.rating.count} reviews)
          </p>
        ) : null}

        {site.googleReviewUrl ? (
          <p className={styles.writeReview}>
            <Button href={site.googleReviewUrl} variant="secondary">
              Write a Review
            </Button>
          </p>
        ) : null}
      </section>

      <section className="section">
        <div className="container">
          {reviews.length > 0 ? (
            <ul className={styles.grid}>
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} maxLength={REVIEW_TEXT_MAX_LENGTH} />
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>
              Reviews are on the way. In the meantime, see our current rating on Google above.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
