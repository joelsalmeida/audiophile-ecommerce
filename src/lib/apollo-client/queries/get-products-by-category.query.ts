import { gql } from '@apollo/client';

export const GET_PRODUCTS_BY_CATEGORY_QUERY = gql`
  query ProductsByCategory(
    $category: Category!
    $paginationArgs: PaginationArgs!
  ) {
    productsByCategory(category: $category, paginationArgs: $paginationArgs) {
      totalCount
      products {
        _id
        name
        description
        price
        previewImage {
          alt
          paths {
            large
            medium
            small
          }
        }
        slug
      }
    }
  }
`;
