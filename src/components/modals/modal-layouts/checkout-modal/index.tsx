import type { CheckoutModalProps } from './index.types';
import styles from './index.module.scss';
import { Button } from '@/components/inputs/button';
import { CartResume } from '@/components/cart-resume';
import { useRouter } from 'next/navigation';
import { useModalBaseActions } from '@/contexts/modal-base-context';

export function CheckoutModal({
  detailedItem,
  otherItemsQuantity,
  grandTotal,
}: CheckoutModalProps) {
  const router = useRouter();
  const { closeModalBase } = useModalBaseActions();

  function handleBackToHome() {
    closeModalBase();
    router.push('/');
  }

  return (
    <div className={styles.checkoutModal}>
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

      <span className={styles.checkoutModal__title}>
        THANK YOU <br />
        FOR YOUR ORDER
      </span>

      <p className={styles.checkoutModal__description}>
        You will receive an email confirmation shortly.
      </p>

      <CartResume
        detailedItem={detailedItem}
        otherItemsQuantity={otherItemsQuantity}
        grandTotal={grandTotal}
      />

      <Button variant="contained" fullWidth onClick={handleBackToHome}>
        Back to home
      </Button>
    </div>
  );
}
