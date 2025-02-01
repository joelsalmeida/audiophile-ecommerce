import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ModalBaseStateContextType,
  ModalBaseActionsContextType,
  ModalBaseContextProviderProps,
} from './index.types';
import { lockBodyTagScrolling } from '@/utils';

const ModalBaseStateContext = createContext<
  ModalBaseStateContextType | undefined
>(undefined);

const ModalBaseActionsContext = createContext<
  ModalBaseActionsContextType | undefined
>(undefined);

function ModalBaseContextProvider({ children }: ModalBaseContextProviderProps) {
  const [modalBaseIsOpen, setModalBaseIsOpen] = useState(false);
  const [component, setComponent] = useState<ReactNode>(null);

  useEffect(() => {
    lockBodyTagScrolling(modalBaseIsOpen);
  }, [modalBaseIsOpen]);

  const openModalBase = useCallback((modalContent: ReactNode) => {
    setComponent(modalContent);
    setModalBaseIsOpen(true);
  }, []);

  const closeModalBase = useCallback(() => setModalBaseIsOpen(false), []);

  const toggleModalBase = useCallback(
    () => setModalBaseIsOpen((prevState) => !prevState),
    [],
  );

  const stateContextValue = useMemo(
    () => ({ isModalBaseOpen: modalBaseIsOpen, component }),
    [modalBaseIsOpen, component],
  );

  const actionsContextValue = useMemo(
    () => ({ openModalBase, closeModalBase, toggleModalBase }),
    [openModalBase, closeModalBase, toggleModalBase],
  );

  return (
    <ModalBaseStateContext.Provider value={stateContextValue}>
      <ModalBaseActionsContext.Provider value={actionsContextValue}>
        {children}
      </ModalBaseActionsContext.Provider>
    </ModalBaseStateContext.Provider>
  );
}

function useModalBaseState() {
  const context = useContext(ModalBaseStateContext);

  if (!context) {
    throw new Error(
      'ModalBaseStateContext is missing. Did you forget to wrap your component in `ModalBaseContextProvider`?',
    );
  }

  return context;
}

function useModalBaseActions() {
  const context = useContext(ModalBaseActionsContext);

  if (!context) {
    throw new Error(
      'ModalBaseActionsContext is missing. Did you forget to wrap your component in `ModalBaseContextProvider`?',
    );
  }

  return context;
}

export { ModalBaseContextProvider, useModalBaseState, useModalBaseActions };
