'use client';
import { ProductPreviewCard } from '@/components/product-preview-card';
import styles from './page.module.scss';
import { AboutSection } from '@/components/about-section';
import {
  CategoryCardContainer,
  CategoryCardItem,
} from '@/components/category-card';

import { HEADPHONES_DATA } from './data';
import { CATEGORIES_DATA } from './data';

type CategoryParams = { params: { slug: string } };

// TODO: Review this page
export default function CategoryPage({ params }: CategoryParams) {
  return (
    <>
      <h1 className={styles.title}>{params.slug}</h1>

      <main className={styles.categoryPage}>
        {HEADPHONES_DATA.map((product) => (
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
