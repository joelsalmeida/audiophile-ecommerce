'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  useCheckoutOrder,
  useCheckoutResetOnSubmit,
  useZipCodeAutofill,
} from './hooks';
import { CheckoutFormUi } from './index.ui';
import {
  CheckoutFormDataType,
  checkoutFormSchema,
} from './schemas/checkoutFormSchema';

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
    <CheckoutFormUi
      onSubmit={checkoutForm.handleSubmit(onSubmit)}
      checkoutForm={checkoutForm}
    />
  );
}
