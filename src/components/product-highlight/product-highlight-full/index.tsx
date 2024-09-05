import { Button } from '@/components/inputs/button';
import styles from './index.module.scss';
import { ProductHighlightFullProps } from './index.types';

export function ProductHighlightFull({
  name,
  description,
  anchor,
  images,
}: ProductHighlightFullProps) {
  return (
    <div className={styles.productHighlightFull}>
      <picture className={styles.productHighlightFull__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />
        <img
          className={styles.productHighlightFull__image__img}
          src={images.sm.path}
          alt="Flowers"
        />
      </picture>

      <div className={styles.productHighlightFull__content}>
        <span className={styles.productHighlightFull__content__title}>
          {name}
        </span>

        <p className={styles.productHighlightFull__content__description}>
          {description}
        </p>

        <Button variant="outlined">{anchor.label}</Button>
      </div>
    </div>
  );
}
