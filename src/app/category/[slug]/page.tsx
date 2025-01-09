import { ProductPreviewCard } from '@/components/product-preview-card';
import styles from './page.module.scss';
import { AboutSection } from '@/components/about-section';
import {
  CategoryCardContainer,
  CategoryCardItem,
} from '@/components/category-card';
import { query } from '@/lib/apollo-client';
import { GET_PRODUCTS_BY_CATEGORY_QUERY } from '@/lib/apollo-client/queries';
import { CATEGORIES_DATA } from './data';
import { ProductType } from './types';
import { getDifferenceBetweenDatesInDays } from '@/utils';

type CategoryParams = {
  params: { slug: 'headphones' | 'earphones' | 'speakers' };
};

// TODO: Review this page
export default async function CategoryPage({ params }: CategoryParams) {
  const SLUG_UPPERCASE = params.slug.toUpperCase();

  const { data, error } = await query({
    query: GET_PRODUCTS_BY_CATEGORY_QUERY,
    variables: {
      category: SLUG_UPPERCASE,
      paginationArgs: { limit: 10, skip: 0 },
    },
  });

  console.log('##### GET_PRODUCT_QUERY data: ', data);
  console.log('##### GET_PRODUCT_QUERY error: ', error);

  const PRODUCTS_DATA = data.productsByCategory.products;

  return (
    <>
      <h1 className={styles.title}>{params.slug}</h1>

      <main className={styles.categoryPage}>
        {params.slug &&
          PRODUCTS_DATA.map((product: ProductType, index: number) => {
            const releaseDateInside90Days =
              getDifferenceBetweenDatesInDays(
                new Date(product.releaseDate),
                new Date(),
              ) <= 90;

            return (
              <ProductPreviewCard
                name={product.name}
                description={product.description[0]}
                images={{
                  alt: '',
                  sm: {
                    path: product.previewImage.paths.small,
                  },
                  md: {
                    path: product.previewImage.paths.medium,
                  },
                  lg: {
                    path: product.previewImage.paths.large,
                  },
                }}
                anchor={{
                  href: `/product/${product._id}`,
                  label: 'See product',
                }}
                flipped={index % 2 !== 0}
                newProduct={releaseDateInside90Days}
                key={product.slug}
              />
            );
          })}

        <CategoryCardContainer>
          {CATEGORIES_DATA.map((category) => (
            <CategoryCardItem {...category} key={category.title} />
          ))}
        </CategoryCardContainer>

        <AboutSection />
      </main>
    </>
  );
}
