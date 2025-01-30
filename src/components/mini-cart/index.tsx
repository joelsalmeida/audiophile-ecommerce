import styles from './index.module.scss';
import { formatToBrCurrency } from '@/utils/format-to-br-currency';
import { ProductMiniCard } from '../product-mini-card';
import { MiniCartProps } from './index.types';
import { QuantitySelector } from '../inputs/quantity-selector';
import {
  ADD_TO_CART_MUTATION,
  CLEAR_CART_MUTATION,
  REMOVE_ITEM_FROM_CART_MUTATION,
} from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';
import { Button } from '../inputs/button';
import { useClickOutside } from '@/custom-hooks';
import { useMemo, useRef } from 'react';

// TODO: Think about an empty state.
// TODO: Think about a custom hook for cart manipulations.
export function MiniCart({ cartItems, open = false, onClose }: MiniCartProps) {
  const [addToCartMutation] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  const [removeItemFromCartMutation] = useMutation(
    REMOVE_ITEM_FROM_CART_MUTATION,
    {
      refetchQueries: [GET_CART_QUERY],
    },
  );

  const [clearCartMutation] = useMutation(CLEAR_CART_MUTATION, {
    refetchQueries: [GET_CART_QUERY],
  });

  const addToCartHandler = (id: string, quantity: number) => {
    const addToCartInput = {
      _id: id,
      quantity,
    };

    addToCartMutation({
      variables: { addToCartInput },
    });
  };

  const removeFromCartHandler = (id: string) => {
    const removeItemFromCartInput = {
      _id: id,
    };

    removeItemFromCartMutation({
      variables: { removeItemFromCartInput },
    });
  };

  const removeAllItemsHandler = () => {
    clearCartMutation();
  };

  const CART_ITEMS_TOTAL = useMemo(
    () => cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    [cartItems],
  );

  const MINI_CART_REF = useRef(null);
  useClickOutside(MINI_CART_REF, onClose);

  return (
    <div className={styles.miniCart} data-open={open} ref={MINI_CART_REF}>
      <div className={styles.miniCart__top}>
        <strong>{`CART: (${cartItems.length})`}</strong>
        <button type="button" onClick={removeAllItemsHandler}>
          Remove all
        </button>
      </div>

      <div>
        {cartItems.map((item) => (
          <div className={styles.miniCart__item} key={item.id}>
            <ProductMiniCard
              name={item.name}
              price={formatToBrCurrency(item.price)}
              image={{ path: item.imagePath }}
            />

            <QuantitySelector
              currentQuantity={item.quantity}
              increment={() => addToCartHandler(item.id, 1)}
              decrement={() => removeFromCartHandler(item.id)}
            />
          </div>
        ))}
      </div>

      <div className={styles.miniCart__totals}>
        <span>TOTAL</span>
        <strong>{formatToBrCurrency(CART_ITEMS_TOTAL)}</strong>
      </div>

      <Button
        fullWidth
        asLink
        href="/checkout"
        variant="contained"
        onClick={onClose}
      >
        CHECKOUT
      </Button>
    </div>
  );
}
