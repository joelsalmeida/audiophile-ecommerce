import { useModalBaseActions } from '@/contexts/modal-base-context';
import { generateOrderResume } from '@/features/checkout/order-confirmation-modal/helpers/generate-order-resume/generate-order-resume';
import { PLACE_ORDER_MUTATION } from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { OrderConfirmationModal } from '../../order-confirmation-modal';
import { CheckoutFormDataType } from '../schemas/checkout-form.schema';

export function useCheckoutOrder() {
  const { openModalBase } = useModalBaseActions();

  const [placeOrderMutation] = useMutation(PLACE_ORDER_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  const onSubmit: SubmitHandler<CheckoutFormDataType> = async () => {
    const { data } = await placeOrderMutation();

    if (!data?.placeOrder?.cartItems || !data?.placeOrder?.totalCost) return;

    const resume = generateOrderResume({
      cartItems: data.placeOrder.cartItems,
      grandTotal: data.placeOrder.totalCost.grandTotal,
    });

    openModalBase(
      <OrderConfirmationModal
        detailedItem={resume.detailedItem}
        otherItemsQuantity={resume.otherItemsQuantity}
        grandTotal={resume.grandTotal}
      />,
    );
  };

  return { onSubmit };
}
