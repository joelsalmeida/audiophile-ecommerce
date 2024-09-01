import { CategoryCardContainerProps } from '../category-card-container/index.types';
import styles from './index.module.scss';

export function CategoryCardContainer({
  children,
}: CategoryCardContainerProps) {
  return <section className={styles.categoryCardContainer}>{children}</section>;
}
