import { gql } from '../__generated__';

export const PLACE_ORDER_MUTATION = gql(`
  mutation PlaceOrderMutation {
    placeOrder {
      totalCost {
        VAT
        grandTotal
        shipping
        total
      }
    }
  }
`);
