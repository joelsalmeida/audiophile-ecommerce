'use client';

import { ADD_TO_CART_MUTATION } from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { AddToCartProps } from './index.types';
import { AddToCartUi } from './index.ui';

export function AddToCart({ productId, price }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);

  const [addToCartMutation] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  async function handleAddToCart() {
    await addToCartMutation({
      variables: {
        addToCartInput: {
          _id: productId,
          quantity,
        },
      },
    });
  }

  return (
    <AddToCartUi
      price={price}
      quantity={quantity}
      onIncrement={increment}
      onDecrement={decrement}
      onAddToCart={handleAddToCart}
    />
  );
}
