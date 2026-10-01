import { PhoneLink } from '@/components/ui/PhoneLink';
import { Button } from '@/components/ui/Button';
import styles from './StickyCallBar.module.scss';

// Mobile-only (hidden from md up via CSS). Keeps Call and Free Estimate always reachable.
export function StickyCallBar() {
  return (
    <div className={`sticky-call-bar ${styles.bar}`}>
      <PhoneLink location="sticky_bar" className={styles.button} />
      <Button href="/contact/" variant="secondary" className={styles.button}>
        Free Estimate
      </Button>
    </div>
  );
}
