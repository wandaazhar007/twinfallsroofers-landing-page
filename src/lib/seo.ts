import type { Metadata } from 'next';
import { site } from '@/content/site';
import type { ImageAsset } from '@/types/content';

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
};

// Shared social preview image (1200x630, cropped from the home hero photo). Used when a page
// doesn't pass its own image, so every page has og:image and twitter:image.
const DEFAULT_OG_IMAGE = {
  src: '/images/og-default.jpg',
  alt: 'Completed asphalt shingle roof installation',
  width: 1200,
  height: 630,
};

// Single helper for page metadata: canonical URL, Open Graph, and Twitter card.
// Pages should call this instead of constructing Metadata objects by hand.
export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const url = new URL(path, site.siteUrl).toString();
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const ogImageUrl = new URL(ogImage.src, site.siteUrl).toString();
  const ogImageSize = image ? {} : { width: DEFAULT_OG_IMAGE.width, height: DEFAULT_OG_IMAGE.height };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: site.businessName,
      images: [{ url: ogImageUrl, alt: ogImage.alt, ...ogImageSize }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: ogImageUrl, alt: ogImage.alt }],
    },
  };
}
