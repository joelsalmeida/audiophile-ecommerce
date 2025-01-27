'use client';
import { CheckoutForm } from '@/components/forms/checkout-form';
import styles from './page.module.scss';
import { CheckoutSummary } from '@/components/checkout-summary';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useQuery } from '@apollo/client';
import { TOTAL_COST_FALLBACK } from '@/utils/fallback-props';

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
