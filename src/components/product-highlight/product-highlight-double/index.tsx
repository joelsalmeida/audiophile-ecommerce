import { Button } from '@/components/inputs/button';
import styles from './index.module.scss';
import { ProductHighlightDoubleProps } from './index.types';

export function ProductHighlightDouble({
  name,
  anchor,
  images,
}: ProductHighlightDoubleProps) {
  return (
    <div className={styles.productHighlightDouble}>
      <picture className={styles.productHighlightDouble__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />
        <img
          className={styles.productHighlightDouble__image__img}
          src={images.sm.path}
          alt="Flowers"
        />
      </picture>

      <div className={styles.productHighlightDouble__content}>
        <span className={styles.productHighlightDouble__content__title}>
          {name}
        </span>
        <Button variant="outlined">{anchor.label}</Button>
      </div>
    </div>
  );
}
