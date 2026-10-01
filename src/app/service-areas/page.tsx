import type { Metadata } from 'next';
import Link from 'next/link';
import { areas } from '@/content/areas';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CtaSection } from '@/components/sections/CtaSection';
import { MapPinIcon } from '@/components/ui/icons/MapPinIcon';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Magic Valley Roofing Service Areas | Canyon Construction Services',
  description:
    'Canyon Construction Services is based in Twin Falls and serves nearby Magic Valley communities. See where we work and call (208) 440-4006.',
  path: '/service-areas/',
});

// Only links to area pages that are actually published — see docs/04-spesifikasi-konten.md
// section 3. With every area still unpublished, this shows a neutral message instead of
// links to pages that don't exist yet.
export default function ServiceAreasPage() {
  const publishedAreas = areas.filter((area) => area.published);

  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>Roofing Services Across Twin Falls and the Magic Valley</h1>
        <p className={styles.lead}>
          Canyon Construction Services is based in Twin Falls and serves homeowners and businesses throughout the
          surrounding Magic Valley.
        </p>
        <p className={styles.lead}>
          From Jerome to Hagerman, we bring the same inspections, written estimates, and workmanship to every
          community on this list — not just our home base in Twin Falls. Pick your city below to see what roofing
          looks like in your corner of the valley.
        </p>
      </section>

      <section className="section">
        <div className="container">
          {publishedAreas.length > 0 ? (
            <ul className={styles.list}>
              {publishedAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={area.path} className={styles.chip}>
                    <MapPinIcon className={styles.icon} />
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>
              We&apos;re adding dedicated pages for nearby communities soon. In the meantime, call us to ask whether
              we serve your area.
            </p>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
