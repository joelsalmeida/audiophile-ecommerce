'use client';
import Image from 'next/image';
import styles from './index.module.scss';
import { ProductMiniCardProps } from './index.types';

export function ProductMiniCard({
  name,
  price,
  image: { path, alt = '' },
}: ProductMiniCardProps) {
  return (
    <div className={styles.productMiniCard}>
      <Image
        className={styles.productMiniCard__image}
        src={path}
        width={64}
        height={64}
        alt={alt}
      />

      <div className={styles.productMiniCard__content}>
        <span className={styles.productMiniCard__content__name}>{name}</span>
        <span className={styles.productMiniCard__content__price}>{price}</span>
      </div>
    </div>
  );
}
