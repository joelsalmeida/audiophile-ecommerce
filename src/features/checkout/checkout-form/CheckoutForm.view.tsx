'use client';

import { CheckoutFormViewProps } from './CheckoutForm.view.types';
import styles from './checkout-form.module.scss';
import { BillingSection, PaymentSection, ShippingSection } from './sections';

export function CheckoutFormView({
  checkoutForm,
  onSubmit,
}: CheckoutFormViewProps) {
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
