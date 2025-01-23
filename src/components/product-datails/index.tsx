'use client';
import { AddToCart } from '../add-to-cart';
import styles from './index.module.scss';
import { ProductDetailsProps } from './index.types';

export function ProductDetails({
  id,
  name,
  description,
  price,
  newProduct,
  images,
}: ProductDetailsProps) {
  return (
    <section className={styles.productDetails}>
      <picture className={styles.productDetails__image}>
        <source media="(min-width:1110px)" srcSet={images.lg.path} />
        <source media="(min-width:768px)" srcSet={images.md.path} />
        <img
          className={styles.productDetails__image__img}
          src={images.sm.path}
          alt={images.alt}
        />
      </picture>

      <div className={styles.productDetails__container}>
        <div className={styles.productDetails__content}>
          {newProduct && (
            <span className={styles.productDetails__content__tag}>
              new product
            </span>
          )}

          <h1 className={styles.productDetails__content__title}>{name}</h1>

          <p className={styles.productDetails__content__description}>
            {description}
          </p>
        </div>

        <AddToCart productId={id} price={price} />
      </div>
    </section>
  );
}
