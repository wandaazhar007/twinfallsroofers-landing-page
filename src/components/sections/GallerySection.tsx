import { gallery } from '@/content/gallery';
import { GalleryLightbox } from './GalleryLightbox';
import styles from './GallerySection.module.scss';

export function GallerySection() {
  if (gallery.length === 0) return null;

  return (
    <section className="section section--alt">
      <div className="container">
        <h2 className={styles.heading}>Roofing Gallery</h2>
        <GalleryLightbox images={gallery} />
      </div>
    </section>
  );
}
