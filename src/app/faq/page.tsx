import type { Metadata } from 'next';
import { faq } from '@/content/faq';
import { buildMetadata } from '@/lib/seo';
import { buildFaqJsonLd } from '@/lib/jsonld';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import type { FaqItem } from '@/types/content';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Roofing FAQ for Twin Falls Homeowners | Canyon Construction Services',
  description:
    'Answers to common roofing questions from Twin Falls homeowners: cost, timing, materials, warranties, and insurance claims.',
  path: '/faq/',
});

const CATEGORY_ORDER: Array<{ category: FaqItem['category']; label: string }> = [
  { category: 'cost', label: 'Cost' },
  { category: 'timing', label: 'Timing' },
  { category: 'materials', label: 'Materials' },
  { category: 'warranty', label: 'Warranty' },
  { category: 'insurance', label: 'Insurance & Claims' },
  { category: 'preparation', label: 'Preparation' },
];

export default function FaqPage() {
  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'FAQ', path: '/faq/' }]} />
      </div>

      <JsonLd data={buildFaqJsonLd(faq)} />

      <section className={`container ${styles.intro}`}>
        <h1>Roofing Questions, Answered</h1>
        <p className={styles.lead}>
          Common questions from Twin Falls and Magic Valley homeowners about cost, timing, materials, warranties,
          and insurance.
        </p>
      </section>

      <section className="section">
        <div className={`container ${styles.groups}`}>
          {CATEGORY_ORDER.map(({ category, label }) => {
            const items = faq.filter((item) => item.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className={styles.groupHeading}>{label}</h2>
                <FaqAccordion items={items} withJsonLd={false} />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
