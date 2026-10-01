'use client';

import { site } from '@/content/site';
import { trackPhoneClick, type PhoneClickLocation } from '@/lib/tracking';

type Props = {
  location: PhoneClickLocation;
  className?: string;
};

// Plain-text phone link (no button styling); client-only for click tracking.
export function PhoneTextLink({ location, className }: Props) {
  return (
    <a href={site.phoneHref} className={className} onClick={() => trackPhoneClick(location)}>
      {site.phone}
    </a>
  );
}
