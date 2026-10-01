import { PhoneLink } from '@/components/ui/PhoneLink';
import { Button } from '@/components/ui/Button';
import styles from './CtaSection.module.scss';

type Props = {
  heading?: string;
  description?: string;
};

// Closing block at the end of every page: headline + Call and Free Estimate CTAs.
export function CtaSection({
  heading = 'Ready to get your roof fixed right?',
  description = 'Call for a free estimate, or send us your project details online.',
}: Props) {
  return (
    <section className={`section ${styles.cta}`}>
      <div className="container">
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className={styles.actions}>
          <PhoneLink location="content" />
          <Button href="/contact/" variant="secondary">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
