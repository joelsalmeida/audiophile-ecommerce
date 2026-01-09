import { useEffect } from 'react';
import { shakeKeyframes } from '../utilities/shake-keyframes';

export function useMiniCartEffects(isMiniCartOpen: boolean, count: number) {
  useEffect(() => {
    if (isMiniCartOpen) return;

    document
      .getElementById('mini-cart-switcher-button')
      ?.animate(shakeKeyframes, {
        duration: 800,
        easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      });
  }, [count]);
}
