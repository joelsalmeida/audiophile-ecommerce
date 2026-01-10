'use client';

import styles from './index.module.scss';
import { CheckoutFormUiProps } from './index.ui.types';
import { BillingSection } from './sections/billing-section';
import { PaymentSection } from './sections/payment-section';
import { ShippingSection } from './sections/shipping-section';

export function CheckoutFormUi({
  checkoutForm,
  onSubmit,
}: CheckoutFormUiProps) {
  return (
    <form
      id="checkout-form"
      className={styles.checkoutForm}
      onSubmit={onSubmit}
    >
      <BillingSection checkoutForm={checkoutForm} />

      <ShippingSection checkoutForm={checkoutForm} />

      <PaymentSection checkoutForm={checkoutForm} />
    </form>
  );
}
