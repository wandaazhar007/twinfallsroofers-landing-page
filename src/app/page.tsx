import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { faq } from '@/content/faq';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { AreasList } from '@/components/sections/AreasList';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { GallerySection } from '@/components/sections/GallerySection';
import { CtaSection } from '@/components/sections/CtaSection';
import styles from './page.module.scss';

const HOME_FAQ_COUNT = 4;

export const metadata: Metadata = buildMetadata({
  title: 'Roofing Company in Twin Falls, ID | Canyon Construction Services',
  description:
    'Twin Falls roofers for residential and commercial roofing: repair, replacement, and metal roofs. Free estimates. Call (208) 440-4006.',
  path: '/',
});

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ReviewsSection />
      <ProcessSteps />
      <AreasList />
      <section className="section">
        <div className="container">
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          <FaqAccordion items={faq.slice(0, HOME_FAQ_COUNT)} />
          <p className={styles.faqFooter}>
            <Link href="/faq/">See all FAQ</Link>
          </p>
        </div>
      </section>
      <GallerySection />
      <CtaSection />
    </main>
  );
}
