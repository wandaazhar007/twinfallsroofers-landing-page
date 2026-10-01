import type { SVGProps } from 'react';

export function MagnifyingGlassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.3-4.3" />
    </svg>
  );
}
