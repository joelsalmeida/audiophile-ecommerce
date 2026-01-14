import { OrderResumeProps } from '@/features/checkout/order-confirmation-modal/elements/order-resume';

export type OrderConfirmationModalViewProps = {
  backToHomeHandler: () => void;
} & OrderResumeProps;
