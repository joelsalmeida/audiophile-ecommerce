'use client';

import { useMiniCartContext } from '@/contexts/mini-cart-context';
import { useClickOutside } from '@/custom-hooks';
import { formatToBrCurrency } from '@/utils/format-to-br-currency';
import { useMemo, useRef } from 'react';
import { useMiniCartActions } from './hooks/use-mini-cart-actions';
import { useMiniCartData } from './hooks/use-mini-cart-data';
import { useMiniCartEffects } from './hooks/use-mini-cart-effects';
import { MiniCartUI } from './index.ui';
import { MiniCartUiItem } from './index.ui.types';

export function MiniCart() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { items, total, totalQuantityOfItems } = useMiniCartData();
  const { isMiniCartOpen, closeMiniCart } = useMiniCartContext();

  useMiniCartEffects(isMiniCartOpen, totalQuantityOfItems);
  useClickOutside(containerRef, closeMiniCart);

  const uiItems = useMemo<MiniCartUiItem[]>(() => {
    return items.map((item) => ({
      ...item,
      price: formatToBrCurrency(item.price),
    }));
  }, [items]);

  const { increment, decrement, clear } = useMiniCartActions();

  return (
    <MiniCartUI
      isOpen={isMiniCartOpen}
      items={uiItems}
      total={formatToBrCurrency(total)}
      onIncrement={increment}
      onDecrement={decrement}
      onClear={clear}
      onClose={closeMiniCart}
      containerRef={containerRef}
    />
  );
}
