import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'phone';

type Props = {
  /** Renders as a link when set, otherwise a native <button>. */
  href?: string;
  variant?: Variant;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  children: ReactNode;
  'aria-label'?: string;
};

function joinClassNames(...values: Array<string | undefined | false>): string {
  return values.filter(Boolean).join(' ');
}

export function Button({ href, variant = 'primary', type = 'button', onClick, className, children, ...rest }: Props) {
  const classes = joinClassNames(styles.button, styles[variant], className);

  if (href) {
    const isInternal = href.startsWith('/');

    if (isInternal) {
      return (
        <Link href={href} className={classes} onClick={onClick} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
