import { ProductDetails } from '@/components/product-datails';
import styles from './page.module.scss';

import { ALSO_LIKE, IN_THE_BOX, XX99_ONE } from './data';
import { ImageGallery } from '@/components/image-gallery';
import { ProductPreview } from '@/components/product-preview';
import { InTheBox } from '../components/in-the-box';
import { Features } from '../components/features';

type ProductParams = {
  params: { slug: string };
};

// TODO: Make this page dynamic
export default function ProductPage({ params }: ProductParams) {
  console.log('product page params: ', params);

  return (
    <>
      <ProductDetails {...XX99_ONE} />

      <div className={styles.productPage__sectionsContainer}>
        <Features features={XX99_ONE.features} />

        <InTheBox boxItems={IN_THE_BOX} />
      </div>

      <ImageGallery {...XX99_ONE.imageGallery} />

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
