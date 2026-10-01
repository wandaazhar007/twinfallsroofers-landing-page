import { site } from '@/content/site';
import { areas } from '@/content/areas';
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
  const jsonLd: JsonLdObject = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: absoluteUrl(post.path),
    datePublished: post.datePublished,
    author: { '@type': 'Organization', name: post.author },
  };
  if (post.dateModified) jsonLd.dateModified = post.dateModified;
  if (post.image) jsonLd.image = absoluteUrl(post.image.src);
  return jsonLd;
}
