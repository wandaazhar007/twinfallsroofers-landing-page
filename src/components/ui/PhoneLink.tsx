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
  /** Extra click handler, run after the phone_click event is tracked. */
  onClick?: () => void;
};

export function PhoneLink({ location, variant = 'phone', className, children, onClick }: Props) {
  return (
    <Button
      href={site.phoneHref}
      variant={variant}
      className={className}
      onClick={() => {
        trackPhoneClick(location);
        onClick?.();
      }}
    >
      <PhoneIcon width={18} height={18} />
      {children ?? site.phone}
    </Button>
  );
}
