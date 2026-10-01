import { JsonLd } from '@/components/seo/JsonLd';
import { buildServiceJsonLd } from '@/lib/jsonld';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PhoneLink } from '@/components/ui/PhoneLink';
import { Button } from '@/components/ui/Button';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { RelatedLinks } from '@/components/sections/RelatedLinks';
import { CtaSection } from '@/components/sections/CtaSection';
import type { Service } from '@/types/content';
import styles from './page.module.scss';

type Props = {
  service: Service;
};

export function ServiceView({ service }: Props) {
  return (
    <main>
      <JsonLd data={buildServiceJsonLd(service)} />

      <div className="container">
        <Breadcrumbs items={[{ name: service.name, path: service.path }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>{service.h1}</h1>
        <p className={styles.lead}>{service.shortDescription}</p>
        <div className={styles.actions}>
          <PhoneLink location="content" />
          <Button href="/contact/" variant="secondary">
            Get a Free Estimate
          </Button>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.prose}`}>
          {service.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps />

      {service.faq.length > 0 ? (
        <section className="section section--alt">
          <div className="container">
            <h2 className={styles.faqHeading}>{service.name} FAQ</h2>
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      ) : null}

      <RelatedLinks service={service} />

      <CtaSection />
    </main>
  );
}
