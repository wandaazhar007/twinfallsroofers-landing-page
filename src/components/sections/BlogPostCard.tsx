import Image from 'next/image';
import Link from 'next/link';
import type { BlogPostSummary } from '@/lib/content';
import { formatDate } from '@/lib/strings';
import styles from './BlogPostCard.module.scss';

type Props = {
  post: BlogPostSummary;
  headingLevel?: 'h2' | 'h3';
};

export function BlogPostCard({ post, headingLevel = 'h2' }: Props) {
  const Heading = headingLevel;

  return (
    <article className={styles.card}>
      {post.image ? (
        <div className={styles.media}>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 1024px) 38rem, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      ) : null}
      <div className={styles.body}>
        <time dateTime={post.date} className={styles.date}>
          {formatDate(post.date)}
        </time>
        <Heading className={styles.title}>
          <Link href={`/blog/${post.slug}/`} className={styles.link}>
            {post.title}
          </Link>
        </Heading>
        <p className={styles.description}>{post.description}</p>
      </div>
    </article>
  );
}
