import type { SVGProps } from 'react';

export function StormIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M7 16a4 4 0 1 1 .9-7.9A5 5 0 0 1 17 10a3.5 3.5 0 0 1-1 6.9H7Z" />
      <path d="M13 13l-2.5 4h2L11 21l4-5h-2.3Z" />
    </svg>
  );
}
