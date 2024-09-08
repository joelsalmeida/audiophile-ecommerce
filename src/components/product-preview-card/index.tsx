import { ProductPreviewCardProps } from './index.types';
import styles from './index.module.scss';
import { Button } from '@/components/inputs/button';

export function ProductPreviewCard({
  images,
  name,
  description,
  newProduct = false,
  anchor,
  flipped = false,
}: ProductPreviewCardProps) {
  return (
    <div className={styles.productPreviewCard} data-flipped={flipped}>
      <picture className={styles.productPreviewCard__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />
        <img
          className={styles.productPreviewCard__image__img}
          src={images.sm.path}
          alt="Flowers"
        />
      </picture>

      <div
        className={styles.productPreviewCard__content}
        data-flipped={flipped}
      >
        {newProduct && (
          <span className={styles.productPreviewCard__content__tag}>
            New product
          </span>
        )}

        <h2 className={styles.productPreviewCard__content__title}>{name}</h2>

        <p className={styles.productPreviewCard__content__description}>
          {description}
        </p>

        <Button asLink variant="contained" href={anchor.href}>
          {anchor.label}
        </Button>
      </div>
    </div>
  );
}
