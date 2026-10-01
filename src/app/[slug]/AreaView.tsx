import Image from 'next/image';
import { projects } from '@/content/projects';
import { reviews } from '@/content/reviews';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ReviewCard } from '@/components/sections/ReviewCard';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { CtaSection } from '@/components/sections/CtaSection';
import type { Area } from '@/types/content';
import styles from './page.module.scss';

type Props = {
  area: Area;
};

// Only rendered for areas with published: true, which itself requires a real intro and
// at least 2 localNotes — see docs/04-spesifikasi-konten.md section 3. No template text
// that merely swaps the city name is allowed here.
export function AreaView({ area }: Props) {
  const areaProjects = area.projects
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const areaReviews = area.reviewIds
    .map((id) => reviews.find((review) => review.id === id))
    .filter((review): review is NonNullable<typeof review> => Boolean(review));

  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Service Areas', path: '/service-areas/' }, { name: area.name, path: area.path }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>{area.name}, Idaho Roofing Contractor</h1>
        {area.intro ? <p className={styles.lead}>{area.intro}</p> : null}
        {area.distanceFromOffice ? <p className={styles.lead}>{area.distanceFromOffice}</p> : null}

        {area.heroImage ? (
          <div className={styles.imageWrapper}>
            <Image
              src={area.heroImage.src}
              alt={area.heroImage.alt}
              fill
              sizes="(min-width: 1024px) 76rem, 100vw"
              priority
            />
          </div>
        ) : null}
      </section>

      {area.localNotes.length > 0 ? (
        <section className="section section--alt">
          <div className={`container ${styles.prose}`}>
            <h2>What We See in {area.name}</h2>
            <ul>
              {area.localNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {areaProjects.length > 0 ? (
        <section className="section">
          <div className="container">
            <h2 className={styles.sectionHeading}>Recent Projects in {area.name}</h2>
            <ul className={styles.grid}>
              {areaProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {areaReviews.length > 0 ? (
        <section className="section section--alt">
          <div className="container">
            <h2 className={styles.sectionHeading}>What {area.name} Customers Say</h2>
            <ul className={styles.grid}>
              {areaReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <ServicesGrid />

      <CtaSection />
    </main>
  );
}
