import { gql } from '../__generated__';

export const ADD_TO_CART_MUTATION = gql(`
  mutation AddToCartMutation($addToCartInput: AddItemToCartInput!) {
    addToCart(addToCartInput: $addToCartInput) {
      cartItems {
        id
        imagePath
        price
        quantity
      }
      totalCost {
        VAT
        grandTotal
        shipping
        total
      }
    }
  }
`);
