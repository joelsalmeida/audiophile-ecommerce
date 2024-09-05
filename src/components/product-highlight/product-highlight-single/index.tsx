import { Button } from '@/components/inputs/button';
import styles from './index.module.scss';
import { ProductHighlightSingleProps } from './index.types';

export function ProductHighlightSingle({
  name,
  anchor,
  images,
}: ProductHighlightSingleProps) {
  return (
    <div className={styles.productHighlightSingle}>
      <picture className={styles.productHighlightSingle__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />

        <img
          className={styles.productHighlightSingle__image__img}
          src={images.sm.path}
          alt="Flowers"
        />
      </picture>

      <div className={styles.productHighlightSingle__content}>
        <span className={styles.productHighlightSingle__content__title}>
          {name}
        </span>

        <Button variant="outlined">{anchor.label}</Button>
      </div>
    </div>
  );
}
