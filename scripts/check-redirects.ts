// Validates the redirect table in redirects.mjs (docs/05-inventaris-url-lama.md section 4).
// Fails (exit 1) when a destination is not a URL in the sitemap, when a redirect chains
// into another redirect, or when a source is listed twice.
import { legacyRedirects } from '../redirects.mjs';
import sitemap from '@/app/sitemap';

const EXTRA_VALID_PATHS = ['/sitemap.xml'];

const validPaths = new Set([
  ...sitemap().map((entry) => new URL(entry.url).pathname),
  ...EXTRA_VALID_PATHS,
]);
const sources = new Set<string>();
const errors: string[] = [];

for (const { source, destination } of legacyRedirects) {
  if (sources.has(source)) errors.push(`${source}: listed more than once`);
  sources.add(source);

  if (!validPaths.has(destination)) {
    errors.push(`${source} -> ${destination}: destination is not a page in the sitemap`);
  }
}

for (const { source, destination } of legacyRedirects) {
  if (sources.has(destination)) {
    errors.push(`${source} -> ${destination}: chains into another redirect`);
  }
}

if (errors.length > 0) {
  console.error(`check:redirects failed with ${errors.length} error(s):\n`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log(`check:redirects passed (${legacyRedirects.length} redirects).`);
