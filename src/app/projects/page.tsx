import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';
import { buildMetadata } from '@/lib/seo';
import { MIN_PROJECTS_TO_SHOW } from '@/lib/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Roofing Projects in Twin Falls, ID | Canyon Construction Services',
  description:
    'See recent roof replacements and repairs by Canyon Construction Services in Twin Falls and the Magic Valley.',
  path: '/projects/',
});

// Not generated until there are at least 3 real projects — see
// docs/04-spesifikasi-konten.md section 5 and docs/06-pertanyaan-terbuka.md #10.
export default function ProjectsPage() {
  if (projects.length < MIN_PROJECTS_TO_SHOW) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Projects', path: '/projects/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>Our Recent Roofing Projects</h1>
      </section>

      <section className="section">
        <div className="container">
          <ProjectGallery />
        </div>
      </section>
    </main>
  );
}
