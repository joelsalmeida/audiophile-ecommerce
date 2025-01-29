import { gql } from '../__generated__';

export const REMOVE_ITEM_FROM_CART_MUTATION = gql(`
  mutation RemoveItemFromCartMutation($removeItemFromCartInput: RemoveItemFromCartInput!) {
    removeItemFromCart(removeItemFromCartInput: $removeItemFromCartInput) {
      cartItems {
        id
        imagePath
        name
        price
        quantity
      }
      totalCost {
        total
      }
    }
  }
`);
