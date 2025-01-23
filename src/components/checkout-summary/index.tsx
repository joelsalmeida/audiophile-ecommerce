import styles from './index.module.scss';
import { CheckoutSummaryProps } from './index.types';
import { ProductMiniCard } from '../product-mini-card';
import { formatToBrCurrency } from '@/utils';
import { Button } from '../inputs/button';
import { CheckoutSummaryPrice } from './checkout-summary-price/index.';

export function CheckoutSummary({
  cartItems,
  totalCost,
}: CheckoutSummaryProps) {
  const { VAT, grandTotal, shipping, total } = totalCost;

  const SUMMARY_PRICES = [
    { description: 'Total', value: total },
    { description: 'Shipping', value: shipping },
    { description: 'VAT (included)', value: VAT },
    { description: 'Grand total', value: grandTotal },
  ];

  return (
    <div className={styles.checkoutSummary}>
      <strong className={styles.checkoutSummary__title}>Summary</strong>

      <div className={styles.checkoutSummary__items__container}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={styles.checkoutSummary__items__container__item}
          >
            <ProductMiniCard
              name={item.name}
              price={formatToBrCurrency(item.price)}
              image={{ path: item.imagePath }}
            />

            {/* TODO: Refactor this */}
            <span
              className={
                styles.checkoutSummary__items__container__item__quantity
              }
            >
              {item.quantity}X
            </span>
          </div>
        ))}
      </div>

      <div className={styles.checkoutSummary__values__container}>
        {SUMMARY_PRICES.map((summaryItem) => (
          <CheckoutSummaryPrice
            key={summaryItem.description}
            description={summaryItem.description}
            priceInCents={summaryItem.value}
          />
        ))}
      </div>

      <Button
        variant="contained"
        fullWidth={true}
        type="submit"
        form="checkout-form"
      >
        Continue & Pay
      </Button>
    </div>
  );
}
