'use client';

import { CheckoutModal } from '@/components/modals';
import { useModalBaseActions } from '@/contexts/modal-base-context';
import { useCartResumeData, useGetZipCodeData } from '@/custom-hooks';
import { PLACE_ORDER_MUTATION } from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './index.module.scss';
import {
  CheckoutFormDataType,
  checkoutFormSchema,
} from './schemas/checkoutFormSchema';
import { BillingSection } from './sections/billing-section';
import { PaymentSection } from './sections/payment-section';
import { ShippingSection } from './sections/shipping-section';

export function CheckoutForm() {
  const checkoutForm = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      paymentMethod: 'e-money',
    },
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = checkoutForm;

  const { openModalBase } = useModalBaseActions();

  console.log('##### ERRORS: ', errors);

  const [ZIP_CODE] = watch(['zipCode', 'paymentMethod']);

  const {
    data: zipCodeData,
    isLoading,
    error,
  } = useGetZipCodeData(Number(ZIP_CODE?.replace('-', '')));

  useEffect(() => {
    if (zipCodeData) {
      setValue('address', zipCodeData.street);
      setValue('city', zipCodeData.city);
      setValue('country', 'Brazil');
    }
  }, [zipCodeData]);

  console.log('##### CheckoutForm ZIP CODE: ', zipCodeData, isLoading, error);

  const { data: cartResumeData } = useCartResumeData();

  const [placeOrderMutation] = useMutation(PLACE_ORDER_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  const handleOnSubmit: SubmitHandler<CheckoutFormDataType> = (data) => {
    if (cartResumeData?.detailedItem) {
      openModalBase(
        <CheckoutModal
          detailedItem={cartResumeData.detailedItem}
          otherItemsQuantity={cartResumeData.otherItemsQuantity}
          grandTotal={cartResumeData.grandTotal}
        />,
      );

      placeOrderMutation();

      console.log('##### SUBMITTED: ', data, cartResumeData);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      id="checkout-form"
      className={styles.checkoutForm}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <BillingSection checkoutForm={checkoutForm} />

      <ShippingSection checkoutForm={checkoutForm} />

      <PaymentSection checkoutForm={checkoutForm} />
    </form>
  );
}
