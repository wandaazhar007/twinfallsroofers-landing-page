import { site } from '@/content/site';
import { areas } from '@/content/areas';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';
import type { FaqItem, Service } from '@/types/content';

// JSON-LD builders. Rendered server-side through the <JsonLd /> component (Fase 2).
// No aggregateRating here — see CLAUDE.md: only add it on a page that displays every
// review the count represents.
type JsonLdObject = Record<string, unknown>;

function absoluteUrl(path: string): string {
  return new URL(path, site.siteUrl).toString();
}

export function buildRoofingContractorJsonLd(): JsonLdObject {
  const publishedAreaNames = areas.filter((area) => area.published).map((area) => area.name);
  const areaServed = ['Twin Falls', 'Magic Valley', ...publishedAreaNames];

  const jsonLd: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: site.businessName,
    url: site.siteUrl,
    telephone: site.phone,
    image: absoluteUrl(site.logo.src),
    logo: absoluteUrl(site.logo.src),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.openingHours.dayOfWeek,
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    areaServed,
  };

  if (site.geo) {
    jsonLd.geo = {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    };
  }

  const sameAs = [
    site.social.facebook,
    site.social.instagram,
    site.googleBusinessProfileUrl,
  ].filter((value): value is string => Boolean(value));
  if (sameAs.length > 0) jsonLd.sameAs = sameAs;

  if (site.email) jsonLd.email = site.email;
  if (site.license) jsonLd.license = site.license;
  if (site.foundedYear) jsonLd.foundingDate = String(site.foundedYear);

  return jsonLd;
}

export function buildServiceJsonLd(service: Service): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url: absoluteUrl(service.path),
    areaServed: ['Twin Falls', 'Magic Valley'],
    provider: {
      '@type': 'RoofingContractor',
      name: site.businessName,
      telephone: site.phone,
      url: site.siteUrl,
    },
  };
}

export function buildFaqJsonLd(items: FaqItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export type BreadcrumbEntry = { name: string; path: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbEntry[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type BlogPostingInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string | null;
  author: string;
  image?: { src: string; alt: string } | null;
};

export function buildBlogPostingJsonLd(post: BlogPostingInput): JsonLdObject {
  const url = absoluteUrl(post.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: { '@type': 'Organization', name: post.author, url: site.siteUrl },
    publisher: {
      '@type': 'Organization',
      name: site.businessName,
      logo: { '@type': 'ImageObject', url: absoluteUrl(site.logo.src) },
    },
    image: absoluteUrl(post.image?.src ?? DEFAULT_OG_IMAGE.src),
    inLanguage: 'en-US',
  };
}

export type BlogListingInput = {
  name: string;
  description: string;
  path: string;
  posts: { title: string; path: string; datePublished: string }[];
};

export function buildBlogJsonLd(blog: BlogListingInput): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: blog.name,
    description: blog.description,
    url: absoluteUrl(blog.path),
    publisher: { '@type': 'Organization', name: site.businessName, url: site.siteUrl },
    blogPost: blog.posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: absoluteUrl(post.path),
      datePublished: post.datePublished,
    })),
  };
}
