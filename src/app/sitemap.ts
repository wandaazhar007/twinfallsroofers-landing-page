import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { areas } from '@/content/areas';
import { mainNavigation, footerNavigation } from '@/content/navigation';
import { getAllBlogPosts } from '@/lib/content';
import { isNavigationFlagReady } from '@/lib/navigation';

function toAbsoluteUrl(path: string): string {
  return new URL(path, site.siteUrl).toString();
}

// Only URLs that actually render: services, published areas, top-level pages whose
// showWhen flag is ready (e.g. /projects/ stays out until it has enough entries), and
// every blog post. lastModified is only set where a real date exists (blog frontmatter).
export default function sitemap(): MetadataRoute.Sitemap {
  const pagePaths = [...mainNavigation, ...footerNavigation]
    .filter((item) => isNavigationFlagReady(item.showWhen))
    .map((item) => item.href);

  const paths = new Set([
    ...pagePaths,
    ...services.map((service) => service.path),
    ...areas.filter((area) => area.published).map((area) => area.path),
  ]);

  const pageEntries = [...paths].map((path) => ({ url: toAbsoluteUrl(path) }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}/`),
    lastModified: post.updated ?? post.date,
  }));

  return [...pageEntries, ...blogEntries];
}
