'use client';
import styles from './index.module.scss';
import { QuantitySelectorProps } from './index.types';

export function QuantitySelector({
  maxQuantity = 99,
  increment,
  decrement,
  currentQuantity,
  ...restProps
}: QuantitySelectorProps) {
  const MAX_QUANTITY_REACHED = currentQuantity === maxQuantity;

  return (
    <div className={styles.quantitySelector}>
      <button
        className={styles.quantitySelector__button}
        type="button"
        onClick={decrement}
        disabled={currentQuantity === 0}
      >
        -
      </button>

      <input
        className={styles.quantitySelector__input}
        type="text"
        {...restProps}
        value={currentQuantity}
        readOnly
      />

      <button
        className={styles.quantitySelector__button}
        type="button"
        onClick={increment}
        disabled={MAX_QUANTITY_REACHED}
      >
        +
      </button>
    </div>
  );
}
