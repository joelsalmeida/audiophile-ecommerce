'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CheckoutFormView } from './CheckoutForm.view';
import {
  useCheckoutOrder,
  useCheckoutResetOnSubmit,
  useZipCodeAutofill,
} from './hooks';
import {
  CheckoutFormDataType,
  checkoutFormSchema,
} from './schemas/checkout-form.schema';

export function CheckoutForm() {
  const checkoutForm = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  useZipCodeAutofill(checkoutForm);

  useCheckoutResetOnSubmit(checkoutForm);

  const { onSubmit } = useCheckoutOrder();

  return (
    <CheckoutFormView
      onSubmit={checkoutForm.handleSubmit(onSubmit)}
      checkoutForm={checkoutForm}
    />
  );
}
