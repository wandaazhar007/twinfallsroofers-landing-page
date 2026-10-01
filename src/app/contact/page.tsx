import type { Metadata } from 'next';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { formatHour } from '@/lib/strings';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PhoneLink } from '@/components/ui/PhoneLink';
import { EstimateForm } from '@/components/forms/EstimateForm';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Free Roof Estimate in Twin Falls, ID | Canyon Construction Services',
  description:
    'Call (208) 440-4006 or send a message for a roof estimate in Twin Falls and the Magic Valley. Open 7 AM to 7 PM, seven days a week.',
  path: '/contact/',
});

function buildMapEmbedUrl(): string {
  const address = [
    site.address.streetAddress,
    site.address.addressLocality,
    site.address.addressRegion,
    site.address.postalCode,
  ].join(', ');

  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export default function ContactPage() {
  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>Request Your Free Roof Estimate</h1>
        <p className={styles.lead}>
          Call us or send your project details below. We&apos;ll follow up to schedule a free
          estimate for your roof in Twin Falls or the Magic Valley.
        </p>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.napCard}>
            <div className={styles.napItem}>
              <span className={styles.napLabel}>Phone</span>
              <PhoneLink location="contact" />
            </div>

            {site.email ? (
              <div className={styles.napItem}>
                <span className={styles.napLabel}>Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            ) : null}

            <div className={styles.napItem}>
              <span className={styles.napLabel}>Address</span>
              <p>
                {site.address.streetAddress}
                <br />
                {site.address.addressLocality}, {site.address.addressRegion}{' '}
                {site.address.postalCode}
              </p>
            </div>

            <div className={styles.napItem}>
              <span className={styles.napLabel}>Hours</span>
              <p>
                Open {formatHour(site.openingHours.opens)}–{formatHour(site.openingHours.closes)},
                every day
              </p>
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                src={buildMapEmbedUrl()}
                loading="lazy"
                title={`Map to ${site.businessName}`}
              />
            </div>
          </div>

          <EstimateForm />
        </div>
      </section>
    </main>
  );
}
