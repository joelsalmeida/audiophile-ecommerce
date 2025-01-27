import { gql } from '../__generated__';

export const GET_CART_QUERY = gql(`
  query GetCart {
    getCart {
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
