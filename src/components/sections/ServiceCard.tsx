import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';
import type { Service } from '@/types/content';
import { WrenchIcon } from '@/components/ui/icons/WrenchIcon';
import { RefreshIcon } from '@/components/ui/icons/RefreshIcon';
import { MetalRoofIcon } from '@/components/ui/icons/MetalRoofIcon';
import { StormIcon } from '@/components/ui/icons/StormIcon';
import { MagnifyingGlassIcon } from '@/components/ui/icons/MagnifyingGlassIcon';
import { BuildingIcon } from '@/components/ui/icons/BuildingIcon';
import styles from './ServiceCard.module.scss';

type Props = {
  service: Service;
};

const SERVICE_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'roof-repair': WrenchIcon,
  'roof-replacement': RefreshIcon,
  'metal-roofing': MetalRoofIcon,
  'storm-damage-roof-repair': StormIcon,
  'roof-inspection': MagnifyingGlassIcon,
  'commercial-roofing': BuildingIcon,
};

export function ServiceCard({ service }: Props) {
  const Icon = SERVICE_ICONS[service.slug];

  return (
    <Link href={service.path} className={styles.card}>
      {Icon ? <Icon className={styles.icon} /> : null}
      <h3 className={styles.name}>{service.name}</h3>
      <p className={styles.description}>{service.shortDescription}</p>
    </Link>
  );
}
