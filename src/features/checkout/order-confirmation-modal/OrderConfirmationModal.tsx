import { useModalBaseActions } from '@/contexts/modal-base-context';
import { OrderResumeProps } from '@/features/checkout/order-confirmation-modal/elements/order-resume';
import { useRouter } from 'next/navigation';
import { OrderConfirmationModalView } from './OrderConfirmationModal.view';

export function OrderConfirmationModal(orderResume: OrderResumeProps) {
  const router = useRouter();
  const { closeModalBase } = useModalBaseActions();

  function closeAndBackToHome() {
    closeModalBase();
    router.push('/');
  }

  return (
    <OrderConfirmationModalView
      backToHomeHandler={closeAndBackToHome}
      detailedItem={orderResume.detailedItem}
      otherItemsQuantity={orderResume.otherItemsQuantity}
      grandTotal={orderResume.grandTotal}
    />
  );
}
