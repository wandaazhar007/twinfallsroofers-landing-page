import { fileURLToPath } from 'node:url';

const stylesPath = fileURLToPath(new URL('./src/styles', import.meta.url));

// Old WordPress articles lived at the domain root; they now live under /blog/ with the
// same slug. See docs/05-inventaris-url-lama.md section 2.
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    // Next's sass-loader defaults to the modern Dart Sass API, which reads `loadPaths`
    // (not the legacy `includePaths`) to resolve `@use 'variables' as *;` from any file.
    loadPaths: [stylesPath],
  },
  redirects() {
    return LEGACY_BLOG_SLUGS.map((slug) => ({
      source: `/${slug}/`,
      destination: `/blog/${slug}/`,
      permanent: true,
    }));
  },
};

export default nextConfig;
