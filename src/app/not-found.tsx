import type { Metadata } from 'next';
import { MagnifyingGlassIcon } from '@/components/ui/icons/MagnifyingGlassIcon';
import styles from './not-found.module.scss';

export const metadata: Metadata = {
  title: 'Page Not Found | Canyon Construction Services',
  description: 'The page you are looking for could not be found.',
};

// Intentionally link-free (client request, 2026-10-01): the header, footer, and sticky call bar
// from the root layout still give visitors navigation and a phone CTA.
export default function NotFound() {
  return (
    <main className={`container section ${styles.notFound}`}>
      <div className={styles.iconCircle}>
        <MagnifyingGlassIcon className={styles.icon} />
      </div>
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 className={styles.heading}>Page Not Found</h1>
      <p className={styles.lead}>
        Sorry, we couldn&apos;t find that page. It may have been moved, or the address may be
        mistyped.
      </p>
      <p className={styles.hint}>Use the menu above to find what you need.</p>
    </main>
  );
}
