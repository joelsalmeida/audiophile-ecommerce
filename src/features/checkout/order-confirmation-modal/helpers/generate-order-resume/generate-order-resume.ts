import { formatToBrCurrency, getFirstWord } from '@/utils';
import {
  GenerateOrderResumeInput,
  OrderResumeData,
} from './generate-order-resume.types';

export function generateOrderResume({
  cartItems,
  grandTotal,
}: GenerateOrderResumeInput): OrderResumeData {
  const firstCartItem = cartItems[0];
  const quantityOfItemsOnCart = cartItems.reduce(
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
    grandTotal: formatToBrCurrency(grandTotal),
  };

  return cartResumeData;
}
