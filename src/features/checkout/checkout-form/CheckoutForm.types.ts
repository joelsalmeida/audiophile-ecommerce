import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from './schemas/checkout-form.schema';

export type CheckoutFormData = {
  checkoutForm: UseFormReturn<CheckoutFormDataType>;
};
