import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { formatToBrCurrency, getFirstWord } from '@/utils';
import { useQuery } from '@apollo/client';
import { cartResumeDataType } from './index.types';

/**
 * Custom hook to fetch and format cart resume data.
 *
 * @returns {cartResumeDataType} An object containing the formatted cart resume data, loading state, and error state.
 */
export function useCartResumeData(): cartResumeDataType {
  const { data, loading, error } = useQuery(GET_CART_QUERY);

  if (!data) return { data, loading: loading, error: error };

  const isCartEmpty = data.getCart.cartItems.length < 1;

  if (isCartEmpty) return { data: undefined, loading: loading, error: error };

  const firstCartItem = data.getCart.cartItems[0];
  const quantityOfItemsOnCart = data.getCart.cartItems.reduce(
    (acc, currItem) => acc + currItem.quantity,
    0,
  );

  const cartResumeData = {
    detailedItem: {
      name: getFirstWord(firstCartItem.name),
      price: formatToBrCurrency(firstCartItem.price),
      image: {
        alt: '',
        path: firstCartItem.imagePath,
      },
      quantity: firstCartItem.quantity,
    },
    otherItemsQuantity: quantityOfItemsOnCart - firstCartItem.quantity,
    grandTotal: formatToBrCurrency(data.getCart.totalCost.grandTotal),
  };

  return { data: cartResumeData, loading, error };
}
