'use client';

import { trackReviewCtaClick } from '@/lib/tracking';
import { Button } from './Button';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

type Props = {
  href: string;
};

export function ReviewCtaLink({ href }: Props) {
  return (
    <Button href={href} variant="secondary" newTab onClick={trackReviewCtaClick}>
      Write a Review
      <ExternalLinkIcon width={16} height={16} />
      <span className="visually-hidden"> (opens in a new tab)</span>
    </Button>
  );
}
