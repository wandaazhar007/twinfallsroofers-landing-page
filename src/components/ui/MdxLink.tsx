import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

// Renders links inside MDX articles: internal paths go through next/link,
// external URLs open in a new tab.
export function MdxLink({ href = '', children, ...rest }: Props) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
