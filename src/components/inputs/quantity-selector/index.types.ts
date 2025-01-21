export type QuantitySelectorProps = {
  maxQuantity?: number;
  currentQuantity: number;
  increment: () => void;
  decrement: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
