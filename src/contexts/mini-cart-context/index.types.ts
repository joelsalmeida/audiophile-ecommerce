import { ReactNode } from 'react';

export type MiniCartContextType = {
  isOpen: boolean;
  openMiniCart: () => void;
  closeMiniCart: () => void;
  toggleMiniCart: () => void;
};

export type MiniCartContextProviderProps = {
  children: ReactNode;
};
