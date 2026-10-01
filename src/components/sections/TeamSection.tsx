import Image from 'next/image';
import { team } from '@/content/team';
import styles from './TeamSection.module.scss';

export function TeamSection() {
  if (team.length === 0) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className={styles.heading}>Meet Our Team</h2>
        <ul className={styles.grid}>
          {team.map((member) => (
            <li key={member.id} className={styles.card}>
              <div className={styles.photo}>
                <Image
                  src={member.photo.src}
                  alt={member.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{member.name}</p>
                {member.role ? <p className={styles.role}>{member.role}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
