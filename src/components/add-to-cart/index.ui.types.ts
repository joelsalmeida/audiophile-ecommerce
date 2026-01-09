export type AddToCartUiProps = {
  price: string;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToCart: () => void;
};
