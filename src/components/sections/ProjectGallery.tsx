'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGallery.module.scss';

const ALL = 'all';

export function ProjectGallery() {
  const [serviceSlug, setServiceSlug] = useState(ALL);
  const [city, setCity] = useState(ALL);

  const serviceSlugs = useMemo(() => Array.from(new Set(projects.map((project) => project.serviceSlug))), []);
  const cities = useMemo(() => Array.from(new Set(projects.map((project) => project.city))), []);

  const filtered = projects.filter(
    (project) =>
      (serviceSlug === ALL || project.serviceSlug === serviceSlug) && (city === ALL || project.city === city),
  );

  return (
    <div>
      <div className={styles.filters}>
        <label>
          Service
          <select value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)}>
            <option value={ALL}>All services</option>
            {serviceSlugs.map((slug) => (
              <option key={slug} value={slug}>
                {services.find((service) => service.slug === slug)?.name ?? slug}
              </option>
            ))}
          </select>
        </label>

        <label>
          City
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option value={ALL}>All cities</option>
            {cities.map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length > 0 ? (
        <ul className={styles.grid}>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No projects match those filters yet.</p>
      )}
    </div>
  );
}
