import type { Metadata } from 'next';
import { site } from '@/content/site';
import type { ImageAsset } from '@/types/content';

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: ImageAsset;
};

// Single helper for page metadata: canonical URL, Open Graph, and Twitter card.
// Pages should call this instead of constructing Metadata objects by hand.
export function buildMetadata({ title, description, path, image }: BuildMetadataInput): Metadata {
  const url = new URL(path, site.siteUrl).toString();
  const ogImage = image ? new URL(image.src, site.siteUrl).toString() : undefined;

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
      images: ogImage ? [{ url: ogImage, alt: image?.alt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
