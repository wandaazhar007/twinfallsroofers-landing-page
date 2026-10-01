import { services } from '@/content/services';
import { ServiceCard } from './ServiceCard';
import styles from './ServicesGrid.module.scss';

export function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Our Services</h2>
      </div>
      <div className={`container ${styles.grid}`}>
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
