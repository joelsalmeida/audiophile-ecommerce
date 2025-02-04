import { gql } from '../../__generated__';

export const PRODUCT_FRAGMENT = gql(`
  fragment ProductFragment on Product {
    _id
    boxContent {
      name
      quantity
    }
    category
    description
    features
    galleryImages {
      imageOne {
        alt
        paths {
          large
          medium
          small
        }
      }
      imageThree {
        paths {
          large
          medium
          small
        }
      }
      imageTwo {
        paths {
          large
          medium
          small
        }
      }
    }
    name
    previewImage {
      paths {
        large
        medium
        small
      }
    }
    price
    releaseDate
  }
`);
