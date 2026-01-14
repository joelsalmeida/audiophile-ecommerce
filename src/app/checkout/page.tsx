'use client';

import { CheckoutForm } from '@/features/checkout/checkout-form';
import { CheckoutSummary } from '@/features/checkout/checkout-summary/CheckoutSummary';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { TOTAL_COST_FALLBACK } from '@/utils/fallback-props';
import { useQuery } from '@apollo/client';
import styles from './page.module.scss';

export default function CheckoutPage() {
  const { data } = useQuery(GET_CART_QUERY);

  const cartItems = data?.getCart?.cartItems ?? [];
  const totalCost = data?.getCart?.totalCost ?? TOTAL_COST_FALLBACK;

  return (
    <div className={styles.checkoutPageBackground}>
      <div className={styles.checkoutPage}>
        <CheckoutForm />

        <CheckoutSummary cartItems={cartItems} totalCost={totalCost} />
      </div>
    </div>
  );
}
