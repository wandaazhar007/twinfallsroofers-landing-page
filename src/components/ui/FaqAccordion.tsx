import type { FaqItem } from '@/types/content';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqJsonLd } from '@/lib/jsonld';
import { ChevronDownIcon } from '@/components/ui/icons/ChevronDownIcon';
import styles from './FaqAccordion.module.scss';

type Props = {
  items: FaqItem[];
  /** Set false when the caller renders several accordions and emits one shared JsonLd itself. */
  withJsonLd?: boolean;
};

// Native <details>/<summary>, no JS. Emits FAQPage JSON-LD for whatever subset is shown,
// unless the caller opts out (e.g. grouping several accordions under one JSON-LD block).
export function FaqAccordion({ items, withJsonLd = true }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={styles.list}>
      {withJsonLd ? <JsonLd data={buildFaqJsonLd(items)} /> : null}
      {items.map((item) => (
        <details key={item.id} className={styles.item}>
          <summary className={styles.question}>
            <span>{item.question}</span>
            <ChevronDownIcon className={styles.chevron} />
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
