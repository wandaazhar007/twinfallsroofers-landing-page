import Image from 'next/image';
import { services } from '@/content/services';
import type { Project } from '@/types/content';
import styles from './ProjectCard.module.scss';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const service = services.find((item) => item.slug === project.serviceSlug);
  const image = project.images.find((img) => img.kind === 'after') ?? project.images[0];

  return (
    <li className={styles.card}>
      {image ? (
        <div className={styles.imageWrapper}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
      ) : null}
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.meta}>
          {project.city}
          {service ? ` · ${service.name}` : ''}
          {project.material ? ` · ${project.material}` : ''}
        </p>
        <p className={styles.summary}>{project.summary}</p>
      </div>
    </li>
  );
}
