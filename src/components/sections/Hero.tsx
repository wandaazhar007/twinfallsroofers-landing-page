import Image from 'next/image';
import { site } from '@/content/site';
import { PhoneLink } from '@/components/ui/PhoneLink';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.scss';

// Home hero. H1/title/meta come from docs/02-peta-seo-halaman.md and must not be
// rewritten without approval.
export function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <h1>Twin Falls Roofing Company for Repair, Replacement &amp; Metal Roofs</h1>
        <p className={styles.subheadline}>
          Shingle and metal roofing for homes and businesses in Twin Falls and the Magic Valley —
          repairs, replacements, and free estimates.
        </p>

        {site.rating ? (
          <span className={styles.badge}>
            {site.rating.value.toFixed(1)} stars on Google ({site.rating.count} reviews)
          </span>
        ) : null}

        <div className={styles.actions}>
          <PhoneLink location="content" />
          <Button href="/contact/" variant="secondary">
            Get a Free Estimate
          </Button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/completed-shingle-roof-installation.jpg"
          alt="Completed asphalt shingle roof installation"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
    </section>
  );
}
