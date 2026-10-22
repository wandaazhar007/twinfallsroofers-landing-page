// Permanent redirects from the old WordPress site. Source of truth:
// docs/05-inventaris-url-lama.md. Checked by `npm run check:redirects`.

// Old WordPress articles lived at the domain root; they now live under /blog/ with the
// same slug (docs/05 section 2).
const LEGACY_BLOG_SLUGS = [
  'your-fall-roof-checklist-7-things-to-check-before-the-first-snow',
  'what-happens-if-your-roofer-skips-a-permit-and-how-it-could-come-back-to-haunt-you',
  'roofing-red-flags-on-a-home-inspection-report-what-to-watch-out-for',
  'are-trees-too-close-to-your-roof-how-to-spot-and-solve-the-problem',
  'why-does-my-roof-look-wavy-understanding-roof-warping-and-what-to-do-about-it',
  'how-long-will-my-roof-really-last-a-material-by-material-breakdown',
  'what-is-roof-decking-and-why-should-homeowners-care',
  'wildfire-risk',
  'roof-stains',
  'replace-your-gutters',
  'roof-over-existing-shingles',
];

// Old pages, category/author archives, and sitemaps (docs/05 sections 1 and 3).
const LEGACY_PAGES = [
  { source: '/residential-roofing/', destination: '/roof-replacement-twin-falls/' },
  { source: '/commercial-roofing/', destination: '/commercial-roofing-twin-falls/' },
  { source: '/twin-falls-roofing/', destination: '/' },
  { source: '/mountain-home-roofing/', destination: '/service-areas/' },
  { source: '/about-us/', destination: '/about/' },
  { source: '/contact-us/', destination: '/contact/' },
  { source: '/contact-us/thank-you/', destination: '/contact/' },
  { source: '/category/:slug/', destination: '/blog/' },
  { source: '/author/:slug/', destination: '/about/' },
  { source: '/wp-sitemap.xml', destination: '/sitemap.xml' },
  { source: '/sitemap_index.xml', destination: '/sitemap.xml' },
];

/** @type {{ source: string; destination: string }[]} */
export const legacyRedirects = [
  ...LEGACY_PAGES,
  ...LEGACY_BLOG_SLUGS.map((slug) => ({ source: `/${slug}/`, destination: `/blog/${slug}/` })),
];
