import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { areas } from '@/content/areas';
import { footerNavigation } from '@/content/navigation';
import { isNavigationFlagReady } from '@/lib/navigation';
import { FacebookIcon } from '@/components/ui/icons/FacebookIcon';
import { InstagramIcon } from '@/components/ui/icons/InstagramIcon';
import { PhoneTextLink } from '@/components/ui/PhoneTextLink';
import { FooterContactIcons } from './FooterContactIcons';
import styles from './Footer.module.scss';

export function Footer() {
  const publishedAreas = areas.filter((area) => area.published);
  const visibleLinks = footerNavigation.filter((item) => isNavigationFlagReady(item.showWhen));

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>
              {/* Decorative: the business name is written right below it. */}
              <Image src={site.logo.src} alt="" width={72} height={44} />
            </span>
            <p className={styles.businessName}>{site.businessName}</p>
            <p>{site.address.streetAddress}</p>
            <p>
              {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
            </p>
            <p>
              <PhoneTextLink location="footer" className={styles.phone} />
            </p>
            {site.email ? (
              <p>
                <a href={`mailto:${site.email}`} className={styles.email}>
                  {site.email}
                </a>
              </p>
            ) : null}
            <p>
              Open {site.openingHours.opens}–{site.openingHours.closes}, every day
            </p>
            {site.license ? <p>License: {site.license}</p> : null}
          </div>

          <div>
            <p className={styles.heading}>Services</p>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.path}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {publishedAreas.length > 0 ? (
            <div>
              <p className={styles.heading}>Service Areas</p>
              <ul>
                {publishedAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={area.path}>{area.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            <p className={styles.heading}>Company</p>
            <ul>
              {visibleLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <ul className={styles.social}>
              <FooterContactIcons
                linkClassName={styles.socialLink}
                iconClassName={styles.socialIcon}
              />
              {site.social.facebook ? (
                <li>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Facebook (opens in a new tab)"
                    title="Facebook"
                  >
                    <FacebookIcon className={styles.socialIcon} />
                  </a>
                </li>
              ) : null}
              {site.social.instagram ? (
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Instagram (opens in a new tab)"
                    title="Instagram"
                  >
                    <InstagramIcon className={styles.socialIcon} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {site.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
