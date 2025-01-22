import { gql } from '@apollo/client';

export const ADD_TO_CART_MUTATION = gql`
  mutation Mutation($addToCartInput: AddItemToCartInput!) {
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
`;
