// 'use client';
import styles from './index.module.scss';
import { Button } from '../inputs/button';
import { QuantitySelector } from '../inputs/quantity-selector';
import { AddToCartProps } from './index.types';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TO_CART_MUTATION } from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';

// TODO: Improve on click handler logic
export function AddToCart({ productId, price }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);

  const [addToCartMutation] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  function increment() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrement() {
    setQuantity((prevValue) => prevValue - 1);
  }

  const addToCartHandler = async (id: string) => {
    const addToCartInput = {
      _id: id,
      quantity,
    };

    const { data, errors } = await addToCartMutation({
      variables: { addToCartInput },
    });

    console.log('##### addToCartHandler : ', data, errors);
  };

  return (
    <div className={styles.addToCart}>
      <span className={styles.addToCart__price}>{price}</span>

      <div className={styles.addToCart__addSection}>
        <QuantitySelector
          increment={increment}
          decrement={decrement}
          currentQuantity={quantity}
        />

        <Button variant="contained" onClick={() => addToCartHandler(productId)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
