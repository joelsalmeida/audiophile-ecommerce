'use client';

import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { getFirstWord } from '@/utils';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

type MiniCartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
};

export type MiniCartData = {
  items: MiniCartItem[];
  total: number;
  totalQuantityOfItems: number;
};

export function useMiniCartData(): MiniCartData {
  const { data } = useQuery(GET_CART_QUERY);

  return useMemo(() => {
    const cartItems = data?.getCart?.cartItems ?? [];

    let total = 0;
    let totalQuantityOfItems = 0;

    const items = cartItems.map((item) => {
      total += item.price * item.quantity;
      totalQuantityOfItems += item.quantity;

      return {
        id: item.id,
        name: getFirstWord(item.name),
        price: item.price,
        quantity: item.quantity,
        imagePath: item.imagePath,
      };
    });

    return {
      items,
      total,
      totalQuantityOfItems,
    };
  }, [data?.getCart?.cartItems]);
}
