import { Button } from '../inputs/button';
import { QuantitySelector } from '../inputs/quantity-selector';
import styles from './index.module.scss';
import { AddToCartUiProps } from './index.ui.types';

export function AddToCartUi({
  price,
  quantity,
  onIncrement,
  onDecrement,
  onAddToCart,
}: AddToCartUiProps) {
  return (
    <div className={styles.addToCart}>
      <span className={styles.addToCart__price}>{price}</span>

      <div className={styles.addToCart__addSection}>
        <QuantitySelector
          increment={onIncrement}
          decrement={onDecrement}
          currentQuantity={quantity}
        />

        <Button variant="contained" onClick={onAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
