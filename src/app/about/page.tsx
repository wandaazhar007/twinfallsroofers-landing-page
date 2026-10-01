import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { TrustBar } from '@/components/sections/TrustBar';
import { TeamSection } from '@/components/sections/TeamSection';
import { CtaSection } from '@/components/sections/CtaSection';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'About Canyon Construction Services | Twin Falls Roofers',
  description:
    'Meet the Twin Falls roofing team behind Canyon Construction Services. Local crew, written estimates, and workmanship we stand behind.',
  path: '/about/',
});

// Only confirmed, non-numeric facts — no founding year, owner titles, team bios,
// licensing, or certification claims until docs/06-pertanyaan-terbuka.md items
// #1, #2, #6, and #7 are answered. Team names and photos were provided by the client.
export default function AboutPage() {
  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>About Canyon Construction Services</h1>
        <p className={styles.lead}>
          Canyon Construction Services is a roofing contractor based in Twin Falls, Idaho, serving
          homeowners and businesses throughout Twin Falls and the Magic Valley.
        </p>
      </section>

      <TrustBar />

      <section className="section">
        <div className={`container ${styles.prose}`}>
          <h2>What We Do</h2>
          <p>
            We repair and replace shingle and metal roofs, and provide roof inspections for
            residential and commercial properties. Whether you have a leak that needs fixing, storm
            damage to assess, or a roof that&apos;s due for full replacement, we handle the work
            directly rather than subcontracting it out.
          </p>

          <h2>How We Work</h2>
          <p>
            Every project starts with an inspection and a written estimate, so you know what to
            expect before any work begins. We explain what we find in plain terms, match materials
            to your existing roof where it makes sense, and clean up the job site when we&apos;re
            done.
          </p>

          <h2>Serving Twin Falls and the Magic Valley</h2>
          <p>
            We work on homes and businesses throughout Twin Falls and the surrounding Magic Valley
            region, handling the range of conditions Idaho weather puts on a roof — from winter snow
            load to summer UV exposure.
          </p>
        </div>
      </section>

      <TeamSection />

      <CtaSection />
    </main>
  );
}
