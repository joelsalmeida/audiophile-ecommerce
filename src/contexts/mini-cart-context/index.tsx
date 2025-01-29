import { createContext, useContext, useMemo, useState } from 'react';
import {
  MiniCartContextType,
  MiniCartContextProviderProps,
} from './index.types';

const DEFAULT_MINI_CART_CONTEXT: MiniCartContextType = {
  isOpen: false,
  openMiniCart: () => console.warn('openMiniCart called outside provider.'),
  closeMiniCart: () => console.warn('closeMiniCart called outside provider.'),
  toggleMiniCart: () => console.warn('toggleMiniCart called outside provider.'),
};

const MiniCartContext = createContext<MiniCartContextType>(
  DEFAULT_MINI_CART_CONTEXT,
);

function MiniCartContextProvider({ children }: MiniCartContextProviderProps) {
  const [miniCartIsOpen, setMiniCartIsOpen] = useState(false);

  const openMiniCart = () => setMiniCartIsOpen(true);
  const closeMiniCart = () => setMiniCartIsOpen(false);
  const toggleMiniCart = () => setMiniCartIsOpen((prevState) => !prevState);

  const contextValue = useMemo(
    () => ({
      isOpen: miniCartIsOpen,
      openMiniCart,
      closeMiniCart,
      toggleMiniCart,
    }),
    [miniCartIsOpen],
  );

  return (
    <MiniCartContext.Provider value={contextValue}>
      {children}
    </MiniCartContext.Provider>
  );
}

function useMiniCartContext() {
  return useContext(MiniCartContext);
}

export { MiniCartContextProvider, useMiniCartContext };
