import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from './schemas/checkoutFormSchema';

export type CheckoutFormData = {
  checkoutForm: UseFormReturn<CheckoutFormDataType>;
};
