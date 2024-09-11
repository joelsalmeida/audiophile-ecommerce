'use client';
import { ProductPreviewCard } from '@/components/product-preview-card';
import styles from './page.module.scss';
import { AboutSection } from '@/components/about-section';
import {
  CategoryCardContainer,
  CategoryCardItem,
} from '@/components/category-card';

import {
  HEADPHONES_DATA,
  EARPHONES_DATA,
  SPEAKERS_DATA,
  ProductPreviewCardData,
} from './data';
import { CATEGORIES_DATA } from './data';

type CategoryParams = {
  params: { slug: 'headphones' | 'earphones' | 'speakers' };
};

// TODO: Review this page
export default function CategoryPage({ params }: CategoryParams) {
  const DATA_MAPPER: Record<
    CategoryParams['params']['slug'],
    ProductPreviewCardData
  > = {
    headphones: HEADPHONES_DATA,
    earphones: EARPHONES_DATA,
    speakers: SPEAKERS_DATA,
  };

  return (
    <>
      <h1 className={styles.title}>{params.slug}</h1>

      <main className={styles.categoryPage}>
        {params.slug &&
          DATA_MAPPER[params.slug].map((product) => (
            <ProductPreviewCard {...product} key={product.name} />
          ))}

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
