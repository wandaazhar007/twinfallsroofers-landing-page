import type { Review } from '@/types/content';
import { ExpandableText } from '@/components/ui/ExpandableText';
import styles from './ReviewCard.module.scss';

export const REVIEW_TEXT_MAX_LENGTH = 180;

type Props = {
  review: Review;
  // When set, long text is cut to this many characters with a "Read more" toggle.
  maxLength?: number;
};

const MAX_RATING = 5;

export function ReviewCard({ review, maxLength }: Props) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <span className={styles.avatar} aria-hidden="true">
          {initial}
        </span>
        <p className={styles.author}>{review.author}</p>
      </div>
      <div className={styles.ratingRow}>
        <span className={styles.stars} role="img" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: MAX_RATING }, (_, index) => (
            <span
              key={index}
              className={index < review.rating ? styles.starFilled : styles.starEmpty}
            >
              ★
            </span>
          ))}
        </span>
        <span className={styles.date}>
          {review.date}
          {review.city ? ` · ${review.city}` : ''}
        </span>
      </div>
      {maxLength ? (
        <ExpandableText text={review.text} maxLength={maxLength} className={styles.text} />
      ) : (
        <p className={styles.text}>{review.text}</p>
      )}
    </li>
  );
}
