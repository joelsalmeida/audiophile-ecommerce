import styles from './page.module.scss';
import { AboutSection } from '@/components/about-section';
import {
  CategoryCardContainer,
  CategoryCardItem,
} from '@/components/category-card';
import { CATEGORIES_DATA } from './data';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.productPage}>
      {children}

      <CategoryCardContainer>
        {CATEGORIES_DATA.map((category) => (
          <CategoryCardItem {...category} key={category.title} />
        ))}
      </CategoryCardContainer>

      <AboutSection />
    </main>
  );
}
