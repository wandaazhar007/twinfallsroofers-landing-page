import type { Badge } from '@/types/content';

// Trust badges shown in TrustBar. Only confirmed, currently active credentials —
// see docs/06-pertanyaan-terbuka.md #6 (confirmed by the client).
export const badges: Badge[] = [
  {
    id: 'malarkey-emerald-warranty',
    name: 'Malarkey Emerald Premium Warranty',
    image: {
      src: '/images/badge-malarkey-emerald-warranty.png',
      alt: 'Malarkey Emerald Premium Warranty certified installer badge',
      width: 174,
      height: 206,
    },
    href: null,
  },
  {
    id: 'nrca-member',
    name: 'NRCA Member',
    image: {
      src: '/images/badge-nrca-member.png',
      alt: 'National Roofing Contractors Association member badge',
      width: 486,
      height: 152,
    },
    href: null,
  },
  {
    id: 'home-advisor-2019',
    name: 'Best of HomeAdvisor 2019',
    image: {
      src: '/images/badge-home-advisor-2019.png',
      alt: 'Best of HomeAdvisor 2019 award badge',
      width: 262,
      height: 260,
    },
    href: null,
  },
];
