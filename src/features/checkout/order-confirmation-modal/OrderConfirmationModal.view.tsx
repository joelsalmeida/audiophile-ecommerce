import { Button } from '@/components/inputs/button';
import { OrderResume } from '@/features/checkout/order-confirmation-modal/elements/order-resume';
import type { OrderConfirmationModalViewProps } from './OrderConfirmationModal.view.types';
import styles from './order-confirmation-modal.module.scss';

export function OrderConfirmationModalView({
  detailedItem,
  otherItemsQuantity,
  grandTotal,
  backToHomeHandler,
}: OrderConfirmationModalViewProps) {
  return (
    <div className={styles.orderConfirmationModal}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="32" fill="#D87D4A" />
        <path
          d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
          stroke="white"
          strokeWidth="4"
        />
      </svg>

      <span className={styles.orderConfirmationModal__title}>
        THANK YOU <br />
        FOR YOUR ORDER
      </span>

      <p className={styles.orderConfirmationModal__description}>
        You will receive an email confirmation shortly.
      </p>

      <OrderResume
        detailedItem={detailedItem}
        otherItemsQuantity={otherItemsQuantity}
        grandTotal={grandTotal}
      />

      <Button variant="contained" fullWidth onClick={backToHomeHandler}>
        Back to home
      </Button>
    </div>
  );
}
