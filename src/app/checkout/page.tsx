import { CheckoutForm } from '@/components/forms/checkout-form';
import styles from './page.module.scss';
import { CheckoutSummary } from '@/components/checkout-summary';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { query } from '@/lib/apollo-client';

export default async function CheckoutPage() {
  const { data, error } = await query({
    query: GET_CART_QUERY,
  });

  console.log('CheckoutPage data: ', data);
  console.log('CheckoutPage error: ', error);

  return (
    <div className={styles.checkoutPageBackground}>
      <div className={styles.checkoutPage}>
        <CheckoutForm />

        <CheckoutSummary
          cartItems={data.getCart.cartItems}
          totalCost={data.getCart.totalCost}
        />
      </div>
    </div>
  );
}
