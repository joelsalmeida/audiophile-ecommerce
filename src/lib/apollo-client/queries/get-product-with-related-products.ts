import { gql } from '../__generated__';

export const GET_PRODUCT_WITH_RELATED_PRODUCTS = gql(`
  query GetProductWithRelatedProducts($productId: String!) { 
    product(id: $productId) {
      ...ProductFragment
    }
    relatedProducts(id: $productId) {
      ...RelatedProductsFragment
    }
  }
`);
