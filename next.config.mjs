import { fileURLToPath } from 'node:url';
import { legacyRedirects } from './redirects.mjs';

const stylesPath = fileURLToPath(new URL('./src/styles', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    // Next's sass-loader defaults to the modern Dart Sass API, which reads `loadPaths`
    // (not the legacy `includePaths`) to resolve `@use 'variables' as *;` from any file.
    loadPaths: [stylesPath],
  },
  redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;
