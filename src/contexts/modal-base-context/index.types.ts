import { ReactNode } from 'react';

export type ModalBaseStateContextType = {
  isModalBaseOpen: boolean;
  component: ReactNode | null;
};

export type ModalBaseActionsContextType = {
  openModalBase: (content: ReactNode) => void;
  closeModalBase: () => void;
  toggleModalBase: () => void;
};

export type ModalBaseContextProviderProps = {
  children: ReactNode;
};
