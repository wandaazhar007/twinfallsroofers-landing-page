import type { ReactNode } from 'react';
import styles from './Prose.module.scss';

type Props = {
  children: ReactNode;
};

// Typography wrapper for rendered MDX blog content.
export function Prose({ children }: Props) {
  return <div className={styles.prose}>{children}</div>;
}
