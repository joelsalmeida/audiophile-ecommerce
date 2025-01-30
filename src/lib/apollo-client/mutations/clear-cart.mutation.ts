import { gql } from '../__generated__';

export const CLEAR_CART_MUTATION = gql(`
  mutation ClearCart {
    clearCart {
      cartItems {
        id
        imagePath
        name
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
