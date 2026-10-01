// Shared content types. See docs/04-spesifikasi-konten.md.
// Do not redefine these types elsewhere; update here if the spec changes.

export type ImageAsset = {
  src: string;
  alt: string;
};

export type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type Badge = {
  id: string;
  name: string;
  image: ImageAsset & { width: number; height: number };
  href: string | null;
};

export type SiteContent = {
  businessName: string;
  legalName: string | null;
  domain: string;
  siteUrl: string;
  phone: string;
  phoneHref: string;
  email: string | null;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: { latitude: number; longitude: number } | null;
  openingHours: OpeningHours;
  rating: { value: number; count: number } | null;
  googleBusinessProfileUrl: string | null;
  googleReviewUrl: string | null;
  social: {
    facebook: string | null;
    instagram: string | null;
  };
  license: string | null;
  insurance: string | null;
  foundedYear: number | null;
  gtmId: string | null;
  logo: ImageAsset;
};

export type ServiceAudience = 'residential' | 'commercial' | 'both';

export type FaqItem = {
  id: string;
  category: 'cost' | 'timing' | 'materials' | 'warranty' | 'insurance' | 'preparation';
  question: string;
  answer: string;
};

export type ContentSection = {
  heading: string;
  body: string;
};

export type Service = {
  slug: string;
  name: string;
  path: string;
  audience: ServiceAudience;
  title: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  heroImage: ImageAsset | null;
  sections: ContentSection[];
  faq: FaqItem[];
  relatedServices: string[];
  relatedPosts: string[];
  materials: string[];
};

export type Area = {
  slug: string;
  name: string;
  path: string;
  published: boolean;
  distanceFromOffice: string | null;
  intro: string | null;
  localNotes: string[];
  heroImage: ImageAsset | null;
  projects: string[];
  reviewIds: string[];
};

export type Review = {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  source: 'Google';
  city: string | null;
  featured: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  kind: 'before' | 'after' | 'detail';
};

export type Project = {
  id: string;
  title: string;
  city: string;
  serviceSlug: string;
  material: string;
  summary: string;
  images: ProjectImage[];
  completedOn: string | null;
};

export type NavigationFlag = 'projects' | 'reviews' | 'areas';

export type NavigationItem = {
  label: string;
  href: string;
  showWhen: NavigationFlag | null;
};
