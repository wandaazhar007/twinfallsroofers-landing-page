import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { areas } from '@/content/areas';
import { buildMetadata } from '@/lib/seo';
import type { Area, Service } from '@/types/content';
import { ServiceView } from './ServiceView';
import { AreaView } from './AreaView';

// Service and area pages share one flat, single-segment URL space
// (/roof-repair-twin-falls/, /roofing-jerome-id/, ...), so both are resolved from the
// same [slug] route — Next.js doesn't allow two differently-named dynamic segments at
// the same level. Area pages only resolve when published: true (docs/04 section 3).
type Target = { kind: 'service'; service: Service } | { kind: 'area'; area: Area };

function toUrlSlug(path: string): string {
  return path.replace(/^\/|\/$/g, '');
}

function resolveSlug(slug: string): Target | null {
  const service = services.find((item) => toUrlSlug(item.path) === slug);
  if (service) return { kind: 'service', service };

  const area = areas.find((item) => toUrlSlug(item.path) === slug && item.published);
  if (area) return { kind: 'area', area };

  return null;
}

export function generateStaticParams() {
  const serviceParams = services.map((service) => ({ slug: toUrlSlug(service.path) }));
  const areaParams = areas.filter((area) => area.published).map((area) => ({ slug: toUrlSlug(area.path) }));
  return [...serviceParams, ...areaParams];
}

// Unpublished areas (or any other unknown slug) 404 instead of falling back to
// on-demand rendering — only slugs from generateStaticParams above are ever valid.
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<'/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const target = resolveSlug(slug);
  if (!target) return {};

  if (target.kind === 'service') {
    return buildMetadata({
      title: target.service.title,
      description: target.service.metaDescription,
      path: target.service.path,
    });
  }

  const { area } = target;
  return buildMetadata({
    title: `Roofing Company in ${area.name}, ID | Canyon Construction Services`,
    description: `Roofing services in ${area.name}, ID from Canyon Construction Services: repair, replacement, and metal roofing. Call (208) 440-4006.`,
    path: area.path,
  });
}

export default async function DynamicPage(props: PageProps<'/[slug]'>) {
  const { slug } = await props.params;
  const target = resolveSlug(slug);
  if (!target) notFound();

  if (target.kind === 'service') {
    return <ServiceView service={target.service} />;
  }

  return <AreaView area={target.area} />;
}
