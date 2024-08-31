'use client';
import { useState } from 'react';
import styles from './index.module.scss';
import { QuantitySelectorProps } from './index.types';

export function QuantitySelector({
  disabled,
  maxQuantity = 99,
  ...restProps
}: QuantitySelectorProps) {
  const [value, setValue] = useState(0);

  function increment() {
    setValue((prevValue) => prevValue + 1);
  }

  function decrement() {
    setValue((prevValue) => prevValue - 1);
  }

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(target.value);

    const IS_NUMBER = typeof newValue === 'number';
    const IS_QUANTITY_WITHIN_LIMIT = newValue <= maxQuantity && newValue >= 0;
    const SHOULD_UPDATE_VALUE = IS_NUMBER && IS_QUANTITY_WITHIN_LIMIT;

    if (!SHOULD_UPDATE_VALUE) return;

    setValue(newValue);
  }

  const MAX_QUANTITY_REACHED = value === maxQuantity;

  return (
    <div className={styles.quantitySelector}>
      <button
        className={styles.quantitySelector__button}
        type="button"
        onClick={decrement}
        disabled={value === 0}
      >
        -
      </button>

      <input
        className={styles.quantitySelector__input}
        type="text"
        {...restProps}
        value={value}
        onChange={handleChange}
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
