'use client';

import type { ReactNode } from 'react';
import { site } from '@/content/site';
import { trackPhoneClick, type PhoneClickLocation } from '@/lib/tracking';
import { Button } from './Button';
import { PhoneIcon } from './icons/PhoneIcon';

type Props = {
  location: PhoneClickLocation;
  variant?: 'primary' | 'secondary' | 'phone';
  className?: string;
  children?: ReactNode;
};

export function PhoneLink({ location, variant = 'phone', className, children }: Props) {
  return (
    <Button href={site.phoneHref} variant={variant} className={className} onClick={() => trackPhoneClick(location)}>
      <PhoneIcon width={18} height={18} />
      {children ?? site.phone}
    </Button>
  );
}
