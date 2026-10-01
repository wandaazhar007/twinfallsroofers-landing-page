import type { SVGProps } from 'react';

export function MetalRoofIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M4 11 12 5l8 6" />
      <path d="M4 14h16" />
      <path d="M4 11v3M8 9.5v4.5M12 8v6M16 9.5v4.5M20 11v3" />
    </svg>
  );
}
