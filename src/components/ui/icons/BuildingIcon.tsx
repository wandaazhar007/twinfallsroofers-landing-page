import type { SVGProps } from 'react';

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M12 10h7a1 1 0 0 1 1 1v10" />
      <path d="M7 7h1M7 11h1M7 15h1M14 13h1M14 17h1" />
      <path d="M3 21h18" />
    </svg>
  );
}
