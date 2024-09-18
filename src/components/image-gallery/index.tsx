import { ImageGalleryProps } from './index.types';
import styles from './index.module.scss';

export function ImageGallery({
  firstImage,
  secondImage,
  thirdImage,
}: ImageGalleryProps) {
  return (
    <div className={styles.imageGallery}>
      <picture className={styles.imageGallery__first}>
        <source media="(min-width:1110px)" srcSet={firstImage.lg.path} />
        <source media="(min-width:768px)" srcSet={firstImage.md.path} />
        <img
          className={styles.imageGallery__first__img}
          src={firstImage.sm.path}
          alt={firstImage.alt || ''}
        />
      </picture>

      <picture className={styles.imageGallery__second}>
        <source media="(min-width:1110px)" srcSet={secondImage.lg.path} />
        <source media="(min-width:768px)" srcSet={secondImage.md.path} />
        <img
          className={styles.imageGallery__second__img}
          src={secondImage.sm.path}
          alt={secondImage.alt || ''}
        />
      </picture>

      <picture className={styles.imageGallery__third}>
        <source media="(min-width:1110px)" srcSet={thirdImage.lg.path} />
        <source media="(min-width:768px)" srcSet={thirdImage.md.path} />
        <img
          className={styles.imageGallery__third__img}
          src={thirdImage.sm.path}
          alt={thirdImage.alt || ''}
        />
      </picture>
    </div>
  );
}
