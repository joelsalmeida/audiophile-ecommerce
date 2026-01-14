import { ProductMiniCard } from '@/components/product-mini-card';
import styles from './order-resume.module.scss';
import { OrderResumeProps } from './OrderResume.types';

export function OrderResume({
  detailedItem,
  grandTotal,
  otherItemsQuantity,
}: OrderResumeProps) {
  return (
    <div className={styles.orderResume}>
      <div className={styles.orderResume__items}>
        <div className={styles.orderResume__items__item}>
          <ProductMiniCard {...detailedItem} />

          <span className={styles.orderResume__items__item__quantity}>
            {`${detailedItem.quantity} X`}
          </span>
        </div>

        <span
          className={styles.orderResume__items__quantity}
        >{`and ${otherItemsQuantity} other item(s)`}</span>
      </div>

      <div className={styles.orderResume__total}>
        <p className={styles.orderResume__total__description}>Grand total</p>

        <p className={styles.orderResume__total__value}>{grandTotal}</p>
      </div>
    </div>
  );
}
