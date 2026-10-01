import { fileURLToPath } from 'node:url';

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
    return [];
  },
};

export default nextConfig;
