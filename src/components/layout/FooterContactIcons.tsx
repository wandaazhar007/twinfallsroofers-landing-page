'use client';

import { site } from '@/content/site';
import { trackDirectionsClick, trackPhoneClick } from '@/lib/tracking';
import { MapPinIcon } from '@/components/ui/icons/MapPinIcon';
import { PhoneIcon } from '@/components/ui/icons/PhoneIcon';

type Props = {
  linkClassName: string;
  iconClassName: string;
};

// Client-only so the clicks can be tracked; rendered as <li> items inside the footer icon list.
export function FooterContactIcons({ linkClassName, iconClassName }: Props) {
  return (
    <>
      {site.googleBusinessProfileUrl ? (
        <li>
          <a
            href={site.googleBusinessProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label="Our location on Google Maps (opens in a new tab)"
            title="Location"
            onClick={trackDirectionsClick}
          >
            <MapPinIcon className={iconClassName} />
          </a>
        </li>
      ) : null}
      <li>
        <a
          href={site.phoneHref}
          className={linkClassName}
          aria-label={`Call ${site.phone}`}
          title={site.phone}
          onClick={() => trackPhoneClick('footer')}
        >
          <PhoneIcon className={iconClassName} />
        </a>
      </li>
    </>
  );
}
