import Image from 'next/image';
import { site } from '@/content/site';
import { badges } from '@/content/badges';
import { formatHour } from '@/lib/strings';
import styles from './TrustBar.module.scss';

// Only renders facts that are actually confirmed — see docs/04-spesifikasi-konten.md.
// `site.license` stays null until docs/06 #2 is answered, so that line is omitted.
// Badges are shown only because docs/06 #6 confirmed each one is currently active.
export function TrustBar() {
  return (
    <section className="section section--alt">
      <div className={`container ${styles.trustBar}`}>
        {site.rating ? (
          <p className={styles.item}>
            {site.rating.value.toFixed(1)} stars on Google ({site.rating.count} reviews)
          </p>
        ) : null}

        <p className={styles.item}>
          Open {formatHour(site.openingHours.opens)}–{formatHour(site.openingHours.closes)}, every day
        </p>

        {site.license ? <p className={styles.item}>Licensed: {site.license}</p> : null}
      </div>

      {badges.length > 0 ? (
        <div className={`container ${styles.badges}`}>
          <p className={styles.badgesLabel}>Backed by the credentials homeowners look for</p>
          <ul className={styles.badgeList}>
            {badges.map((badge) => {
              const image = (
                <Image
                  src={badge.image.src}
                  alt={badge.image.alt}
                  width={badge.image.width}
                  height={badge.image.height}
                  className={styles.badgeImage}
                />
              );

              return (
                <li key={badge.id} className={styles.badgeItem}>
                  {badge.href ? (
                    <a href={badge.href} target="_blank" rel="noopener noreferrer">
                      {image}
                    </a>
                  ) : (
                    image
                  )}
                  <span className={styles.badgeName}>{badge.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
