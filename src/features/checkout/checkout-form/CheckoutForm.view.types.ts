import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from './schemas/checkout-form.schema';

export type CheckoutFormViewProps = {
  checkoutForm: UseFormReturn<CheckoutFormDataType>;
  onSubmit: (event?: BaseSyntheticEvent) => Promise<void>;
};
