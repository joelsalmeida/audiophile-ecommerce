import { ProductDetails } from '@/components/product-datails';
import styles from './page.module.scss';
import { ALSO_LIKE, IN_THE_BOX } from './data';
import { ImageGallery } from '@/components/image-gallery';
import { ProductPreview } from '@/components/product-preview';
import { InTheBox } from '../components/in-the-box';
import { Features } from '../components/features';
import { GET_PRODUCT_QUERY } from '@/lib/apollo-client/queries';
import { query } from '@/lib/apollo-client';
import { formatToBrCurrency, getDifferenceBetweenDatesInDays } from '@/utils';

type ProductParams = {
  params: { slug: string };
};

// TODO: Make this page dynamic
export default async function ProductPage({ params }: ProductParams) {
  const { data, error } = await query({
    query: GET_PRODUCT_QUERY,
    variables: { productId: params.slug },
  });

  console.log('##### GET_PRODUCT_QUERY data: ', data);
  console.log('##### GET_PRODUCT_QUERY error: ', error);

  const PREVIEW_IMAGE_PATHS = data.product.previewImage.paths;
  const GALLERY_IMAGES = data.product.galleryImages;

  // TODO: DRY
  const releaseDateInside90Days =
    getDifferenceBetweenDatesInDays(
      new Date(data.product.releaseDate),
      new Date(),
    ) <= 90;

  return (
    <>
      <ProductDetails
        id={data.product._id}
        name={data.product.name}
        description={data.product.description}
        price={formatToBrCurrency(data.product.price)}
        newProduct={releaseDateInside90Days}
        images={{
          alt: '',
          sm: { path: PREVIEW_IMAGE_PATHS.small },
          md: { path: PREVIEW_IMAGE_PATHS.medium },
          lg: { path: PREVIEW_IMAGE_PATHS.large },
        }}
      />

      <div className={styles.productPage__sectionsContainer}>
        <Features features={data.product.features} />

        <InTheBox boxItems={IN_THE_BOX} />
      </div>

      <ImageGallery
        firstImage={{
          sm: { path: GALLERY_IMAGES.imageOne.paths.small },
          md: { path: GALLERY_IMAGES.imageOne.paths.medium },
          lg: { path: GALLERY_IMAGES.imageOne.paths.large },
        }}
        secondImage={{
          sm: { path: GALLERY_IMAGES.imageTwo.paths.small },
          md: { path: GALLERY_IMAGES.imageTwo.paths.medium },
          lg: { path: GALLERY_IMAGES.imageTwo.paths.large },
        }}
        thirdImage={{
          sm: { path: GALLERY_IMAGES.imageThree.paths.small },
          md: { path: GALLERY_IMAGES.imageThree.paths.medium },
          lg: { path: GALLERY_IMAGES.imageThree.paths.large },
        }}
      />

      <div className={styles.alsoLike}>
        <h2 className={styles.alsoLike__title}>You may also like</h2>

        <div className={styles.alsoLike__products}>
          {ALSO_LIKE.map((product) => (
            <ProductPreview key={product.name} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
