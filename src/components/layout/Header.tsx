'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { mainNavigation } from '@/content/navigation';
import { isNavigationFlagReady } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { PhoneLink } from '@/components/ui/PhoneLink';
import { MenuIcon } from '@/components/ui/icons/MenuIcon';
import { CloseIcon } from '@/components/ui/icons/CloseIcon';
import styles from './Header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const visibleLinks = mainNavigation.filter((item) => isNavigationFlagReady(item.showWhen));

  // Hides StickyCallBar while the mobile panel is open so its Call/Free Estimate
  // buttons don't visually duplicate the ones inside the panel.
  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink} onClick={() => setIsMenuOpen(false)}>
          <Image src={site.logo.src} alt={site.logo.alt} width={170} height={104} priority />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {visibleLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopActions}>
          <PhoneLink location="header" />
          <Button href="/contact/" variant="secondary">
            Free Estimate
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-nav-panel" className={styles.mobilePanel}>
          <nav aria-label="Mobile">
            <ul>
              {visibleLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileActions}>
            <PhoneLink
              location="header"
              className={styles.mobileActionButton}
              onClick={() => setIsMenuOpen(false)}
            />
            <Button
              href="/contact/"
              variant="secondary"
              className={styles.mobileActionButton}
              onClick={() => setIsMenuOpen(false)}
            >
              Free Estimate
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
