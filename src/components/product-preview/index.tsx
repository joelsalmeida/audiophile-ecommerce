import { ProductPreviewProps } from './index.types';
import styles from './index.module.scss';
import { Button } from '../inputs/button';

export function ProductPreview({ name, anchor, images }: ProductPreviewProps) {
  return (
    <div className={styles.productPreview}>
      <picture className={styles.productPreview__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />
        <img
          className={styles.productPreview__image__img}
          src={images.sm.path}
          alt={images.alt}
        />
      </picture>

      <span className={styles.productPreview__title}>{name}</span>

      <Button asLink href={anchor.href} variant="contained">
        {anchor.label}
      </Button>
    </div>
  );
}
