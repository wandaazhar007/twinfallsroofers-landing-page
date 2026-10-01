import Link from 'next/link';
import { areas } from '@/content/areas';
import { MapPinIcon } from '@/components/ui/icons/MapPinIcon';
import styles from './AreasList.module.scss';

// Renders nothing until at least one area is published — see docs/04-spesifikasi-konten.md
// section 3 and docs/06-pertanyaan-terbuka.md #4.
export function AreasList() {
  const publishedAreas = areas.filter((area) => area.published);
  if (publishedAreas.length === 0) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className={styles.heading}>Also Serving the Magic Valley</h2>
        <p className={styles.lead}>
          We bring the same inspections, written estimates, and workmanship to every community we serve across the
          Magic Valley.
        </p>
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
      </div>
    </section>
  );
}
