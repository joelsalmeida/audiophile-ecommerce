import {
  ADD_TO_CART_MUTATION,
  CLEAR_CART_MUTATION,
  REMOVE_ITEM_FROM_CART_MUTATION,
} from '@/lib/apollo-client/mutations';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMutation } from '@apollo/client';

export function useMiniCartActions() {
  const refetchQueries = [GET_CART_QUERY];

  const [addToCart] = useMutation(ADD_TO_CART_MUTATION, {
    refetchQueries,
  });

  const [removeFromCart] = useMutation(REMOVE_ITEM_FROM_CART_MUTATION, {
    refetchQueries,
  });

  const [clearCart] = useMutation(CLEAR_CART_MUTATION, {
    refetchQueries,
  });

  return {
    increment: (id: string) =>
      addToCart({
        variables: {
          addToCartInput: { _id: id, quantity: 1 },
        },
      }),

    decrement: (id: string) =>
      removeFromCart({
        variables: {
          removeItemFromCartInput: { _id: id },
        },
      }),

    clear: () => clearCart(),
  };
}
