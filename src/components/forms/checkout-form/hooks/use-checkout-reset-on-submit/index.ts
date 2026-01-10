import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from '../../schemas/checkoutFormSchema';

export function useCheckoutResetOnSubmit(
  form: UseFormReturn<CheckoutFormDataType>,
) {
  const { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      form.reset();
    }
  }, [isSubmitSuccessful, form]);
}
