import { CartItems } from '@/features/cart/index.types';

type TotalCost = {
  VAT: number;
  grandTotal: number;
  shipping: number;
  total: number;
};

export type CheckoutSummaryProps = {
  cartItems: CartItems;
  totalCost: TotalCost;
};
