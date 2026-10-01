'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types/content';
import { CloseIcon } from '@/components/ui/icons/CloseIcon';
import { ChevronDownIcon } from '@/components/ui/icons/ChevronDownIcon';
import styles from './GalleryLightbox.module.scss';

type Props = {
  images: GalleryImage[];
};

// Thumbnail grid + modal viewer built on the native <dialog> element, which provides
// focus trapping, Esc to close, and a ::backdrop we can blur.
export function GalleryLightbox({ images }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
    document.documentElement.classList.toggle('modal-open', activeIndex !== null);
  }, [activeIndex]);

  useEffect(() => () => document.documentElement.classList.remove('modal-open'), []);

  const close = () => setActiveIndex(null);
  const step = (delta: number) =>
    setActiveIndex((index) =>
      index === null ? null : (index + delta + images.length) % images.length,
    );

  // Clicks on the dialog itself or on the empty area around the photo close the modal;
  // clicks on the photo or the buttons don't.
  const handleDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    const target = event.target;
    if (
      target === event.currentTarget ||
      (target instanceof HTMLElement && target.dataset.backdrop === 'true')
    ) {
      close();
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  return (
    <>
      <ul className={styles.grid}>
        {images.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              className={styles.thumb}
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger: ${image.alt}`}
            >
              <Image src={image.src} alt="" fill sizes="(min-width: 768px) 15vw, 33vw" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active?.alt ?? 'Gallery photo'}
        onClose={close}
        onClick={handleDialogClick}
        onKeyDown={handleKeyDown}
      >
        {active ? (
          <div className={styles.content} data-backdrop="true">
            <button type="button" className={styles.close} onClick={close} aria-label="Close">
              <CloseIcon />
            </button>

            <Image
              key={active.id}
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="(min-width: 1024px) 80vw, 95vw"
              className={styles.fullImage}
            />

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => step(-1)}
                aria-label="Previous photo"
              >
                <ChevronDownIcon className={styles.prevIcon} />
              </button>
              <p className={styles.counter} aria-live="polite">
                {(activeIndex ?? 0) + 1} / {images.length}
              </p>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => step(1)}
                aria-label="Next photo"
              >
                <ChevronDownIcon className={styles.nextIcon} />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
