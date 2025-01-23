type CartItem = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
};

type TotalCost = {
  VAT: number;
  grandTotal: number;
  shipping: number;
  total: number;
};

export type CheckoutSummaryProps = {
  cartItems: CartItem[];
  totalCost: TotalCost;
};
