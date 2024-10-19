import { Hero } from '@/components/hero';
import styles from './page.module.scss';
import {
  CategoryCardContainer,
  CategoryCardItem,
} from '@/components/category-card';
import { CATEGORIES_DATA } from './category/[slug]/data';
import { AboutSection } from '@/components/about-section';
import { ProductHighlightFull } from '@/components/product-highlight/product-highlight-full';
import { ProductHighlightSingle } from '@/components/product-highlight/product-highlight-single';
import { ProductHighlightDouble } from '@/components/product-highlight/product-highlight-double';
import { ZX9, ZX7, YX1 } from '@/components/product-highlight/data';

export default function Home() {
  return (
    <>
      <Hero />

      <main className={styles.main}>
        <CategoryCardContainer>
          {CATEGORIES_DATA.map((category) => (
            <CategoryCardItem {...category} key={category.title} />
          ))}
        </CategoryCardContainer>

        <section>
          <ProductHighlightFull {...ZX9} />

          <ProductHighlightSingle {...ZX7} />

          <ProductHighlightDouble {...YX1} />
        </section>

        <AboutSection />
      </main>
    </>
  );
}
