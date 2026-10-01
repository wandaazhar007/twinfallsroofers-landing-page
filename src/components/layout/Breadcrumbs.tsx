import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildBreadcrumbJsonLd, type BreadcrumbEntry } from '@/lib/jsonld';
import styles from './Breadcrumbs.module.scss';

type Props = {
  items: BreadcrumbEntry[];
};

// Not rendered on "/" — see docs/03-design-system.md component inventory.
export function Breadcrumbs({ items }: Props) {
  if (items.length === 0) return null;

  const trail: BreadcrumbEntry[] = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <JsonLd data={buildBreadcrumbJsonLd(trail)} />
      <ol>
        {trail.map((item, index) => (
          <li key={item.path}>
            {index === trail.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
