import { BaseSyntheticEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from './schemas/checkoutFormSchema';

export type CheckoutFormUiProps = {
  checkoutForm: UseFormReturn<CheckoutFormDataType>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
};
