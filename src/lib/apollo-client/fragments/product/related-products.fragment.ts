import { gql } from '../../__generated__';

export const RELATED_PRODUCTS_FRAGMENT = gql(`
  fragment RelatedProductsFragment on ProductsPaginatedResponse {
    products {
      _id
      name
      previewImage {
        alt
        paths {
          large
          medium
          small
        }
      }
    }
    totalCount
  }
`);
