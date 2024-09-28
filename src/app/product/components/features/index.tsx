import { FeaturesProps } from './index.types';
import styles from './index.module.scss';

export function Features({ features }: FeaturesProps) {
  return (
    <section className={styles.features}>
      <h2>Features</h2>

      {features.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
