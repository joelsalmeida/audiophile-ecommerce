import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';
import type { CategoryCardItemProps } from './index.types';

export function CategoryCardItem({
  title,
  anchor,
  image,
}: CategoryCardItemProps) {
  return (
    <div className={styles.categoryCardItem}>
      <Image
        className={styles.categoryCardItem__image}
        width={174}
        height={178}
        alt=""
        src={image.path}
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
      />

      <div className={styles.categoryCardItem__content}>
        <span className={styles.categoryCardItem__content__title}>{title}</span>

        <Link
          className={styles.categoryCardItem__content__link}
          href={anchor.href}
        >
          {anchor.label}
        </Link>
      </div>
    </div>
  );
}
