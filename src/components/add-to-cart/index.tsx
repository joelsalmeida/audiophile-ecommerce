// 'use client';
import styles from './index.module.scss';
import { Button } from '../inputs/button';
import { QuantitySelector } from '../inputs/quantity-selector';
import { AddToCartProps } from './index.types';

// TODO: Improve on click handler logic
export function AddToCart({ price, onClickHandler }: AddToCartProps) {
  return (
    <div className={styles.addToCart}>
      <span className={styles.addToCart__price}>{price}</span>

      <div className={styles.addToCart__addSection}>
        <QuantitySelector />

        <Button variant="contained" onClick={onClickHandler}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
