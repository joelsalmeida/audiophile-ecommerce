import { CartItems } from '@/features/cart/index.types';

export type GenerateOrderResumeInput = {
  cartItems: CartItems;
  grandTotal: number;
};

export type OrderResumeData = {
  detailedItem: {
    name: string;
    price: string;
    quantity: number;
    image: {
      alt?: string | undefined;
      path: string;
    };
  };
  otherItemsQuantity: number;
  grandTotal: string;
};
