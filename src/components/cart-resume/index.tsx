import type { CartResumeProps } from './index.types';
import styles from './index.module.scss';
import { ProductMiniCard } from '../product-mini-card';

export function CartResume({
  detailedItem,
  grandTotal,
  otherItemsQuantity,
}: CartResumeProps) {
  return (
    <div className={styles.cartResume}>
      <div className={styles.cartResume__items}>
        <div className={styles.cartResume__items__item}>
          <ProductMiniCard {...detailedItem} />

          <span className={styles.cartResume__items__item__quantity}>
            {`${detailedItem.quantity} X`}
          </span>
        </div>

        <span
          className={styles.cartResume__items__quantity}
        >{`and ${otherItemsQuantity} other item(s)`}</span>
      </div>

      <div className={styles.cartResume__total}>
        <p className={styles.cartResume__total__description}>Grand total</p>

        <p className={styles.cartResume__total__value}>{grandTotal}</p>
      </div>
    </div>
  );
}
