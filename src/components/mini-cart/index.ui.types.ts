import { RefObject } from 'react';

export type MiniCartUiItem = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  imagePath: string;
};

export type MiniCartUIProps = {
  isOpen: boolean;
  items: MiniCartUiItem[];
  total: string;

  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onClear: () => void;
  onClose: () => void;

  containerRef: RefObject<HTMLDivElement>;
};
