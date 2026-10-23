'use client';

import { site } from '@/content/site';
import { trackFacebookClick, trackInstagramClick } from '@/lib/tracking';
import { FacebookIcon } from '@/components/ui/icons/FacebookIcon';
import { InstagramIcon } from '@/components/ui/icons/InstagramIcon';

type Props = {
  linkClassName: string;
  iconClassName: string;
};

// Client-only so the clicks can be tracked; rendered as <li> items inside the footer icon list.
export function FooterSocialIcons({ linkClassName, iconClassName }: Props) {
  return (
    <>
      {site.social.facebook ? (
        <li>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label="Facebook (opens in a new tab)"
            title="Facebook"
            onClick={trackFacebookClick}
          >
            <FacebookIcon className={iconClassName} />
          </a>
        </li>
      ) : null}
      {site.social.instagram ? (
        <li>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
            onClick={trackInstagramClick}
          >
            <InstagramIcon className={iconClassName} />
          </a>
        </li>
      ) : null}
    </>
  );
}
