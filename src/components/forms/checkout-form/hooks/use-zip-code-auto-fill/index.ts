import { useGetZipCodeData } from '@/custom-hooks';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CheckoutFormDataType } from '../../schemas/checkoutFormSchema';

export function useZipCodeAutofill(form: UseFormReturn<CheckoutFormDataType>) {
  const zipCode = form.watch('zipCode');

  const { data } = useGetZipCodeData(Number(zipCode?.replace('-', '')));

  useEffect(() => {
    if (!data) return;

    form.setValue('address', data.street);
    form.setValue('city', data.city);
    form.setValue('country', 'Brazil');
  }, [data, form]);
}
