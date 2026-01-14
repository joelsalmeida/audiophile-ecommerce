import { gql } from '../__generated__';

export const PLACE_ORDER_MUTATION = gql(`
  mutation PlaceOrderMutation {
    placeOrder {
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
