import type { NavigationItem } from '@/types/content';

// Top-level navigation links. Service pages are rendered from services.ts directly
// (e.g. a "Services" menu built by iterating that array), not listed here, to avoid
// duplicating the same data in two places. showWhen flags are evaluated at render time
// against the actual content arrays (projects.ts, reviews.ts, areas.ts) — see
// src/lib/content.ts — so a page only appears in navigation once it has real content.
export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/', showWhen: null },
  { label: 'Service Areas', href: '/service-areas/', showWhen: null },
  { label: 'Projects', href: '/projects/', showWhen: 'projects' },
  { label: 'Reviews', href: '/reviews/', showWhen: 'reviews' },
  { label: 'FAQ', href: '/faq/', showWhen: null },
  { label: 'About', href: '/about/', showWhen: null },
  { label: 'Blog', href: '/blog/', showWhen: null },
  { label: 'Contact', href: '/contact/', showWhen: null },
];

export const footerNavigation: NavigationItem[] = [
  { label: 'About', href: '/about/', showWhen: null },
  { label: 'FAQ', href: '/faq/', showWhen: null },
  { label: 'Blog', href: '/blog/', showWhen: null },
  { label: 'Reviews', href: '/reviews/', showWhen: 'reviews' },
  { label: 'Projects', href: '/projects/', showWhen: 'projects' },
  { label: 'Contact', href: '/contact/', showWhen: null },
  { label: 'Privacy Policy', href: '/privacy-policy/', showWhen: null },
];
