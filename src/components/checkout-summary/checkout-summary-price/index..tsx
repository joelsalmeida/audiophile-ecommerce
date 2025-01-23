import { CheckoutSummaryPriceProps } from './index.types';
import { formatToBrCurrency } from '@/utils';
import styles from './index.module.scss';

export function CheckoutSummaryPrice({
  description,
  priceInCents,
}: CheckoutSummaryPriceProps) {
  return (
    <div className={styles.checkoutSummaryPrice}>
      <span className={styles.checkoutSummaryPrice__description}>
        {description}
      </span>

      <strong className={styles.checkoutSummaryPrice__value}>
        {formatToBrCurrency(priceInCents)}
      </strong>
    </div>
  );
}
