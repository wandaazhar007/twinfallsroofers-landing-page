import type { SiteContent } from '@/types/content';

// Single source of truth for NAP, hours, social, and rating.
// Fields are null until confirmed by the client — see docs/06-pertanyaan-terbuka.md.
// Do not hardcode these values anywhere else.
export const site: SiteContent = {
  businessName: 'Canyon Construction Services',
  legalName: null, // docs/06 #1
  domain: 'twinfallsroofers.com',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://twinfallsroofers.com',
  phone: '(208) 440-4006',
  phoneHref: 'tel:+12084404006',
  email: 'ccstwinfalls@gmail.com', // docs/06 #12 — also the Formspree notification recipient
  address: {
    streetAddress: '1132 Locust St #5',
    addressLocality: 'Twin Falls',
    addressRegion: 'ID',
    postalCode: '83301',
    addressCountry: 'US',
  },
  geo: null,
  openingHours: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '19:00',
  },
  rating: { value: 4.9, count: 39 }, // docs/01 — update at launch with current GBP values
  googleBusinessProfileUrl: 'https://www.google.com/maps?cid=10373575491058787339', // docs/06 #11
  googleReviewUrl: null, // docs/06 #11
  social: {
    facebook: 'https://www.facebook.com/roofspecialist',
    instagram: 'https://www.instagram.com/canyon_construction_services/',
  },
  license: null, // docs/06 #2
  insurance: null, // docs/06 #2
  foundedYear: null, // docs/06 #7
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? null,
  logo: {
    src: '/images/logo-canyon-construction-services.png',
    alt: 'Canyon Construction Services logo',
  },
};
