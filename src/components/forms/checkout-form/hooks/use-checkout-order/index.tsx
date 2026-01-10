import { CheckoutModal } from '@/components/modals';
import { useModalBaseActions } from '@/contexts/modal-base-context';
import { useCartResumeData } from '@/custom-hooks';
import { PLACE_ORDER_MUTATION } from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { CheckoutFormDataType } from '.././../schemas/checkoutFormSchema';

export function useCheckoutOrder() {
  const { openModalBase } = useModalBaseActions();
  const { data: cartResumeData } = useCartResumeData();

  const [placeOrderMutation] = useMutation(PLACE_ORDER_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  const onSubmit: SubmitHandler<CheckoutFormDataType> = () => {
    if (!cartResumeData?.detailedItem) return;

    openModalBase(
      <CheckoutModal
        detailedItem={cartResumeData.detailedItem}
        otherItemsQuantity={cartResumeData.otherItemsQuantity}
        grandTotal={cartResumeData.grandTotal}
      />,
    );

    placeOrderMutation();
  };

  return { onSubmit };
}
