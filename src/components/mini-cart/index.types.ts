type CartItem = {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  quantity: number;
};

export type MiniCartProps = {
  cartItems: CartItem[];
  open?: boolean;
  onClose: () => void;
};
