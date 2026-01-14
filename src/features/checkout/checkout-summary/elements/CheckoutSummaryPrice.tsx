import { formatToBrCurrency } from '@/utils';
import styles from './checkout-summary-price.module.scss';
import { CheckoutSummaryPriceProps } from './CheckoutSummaryPrice.types';

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
