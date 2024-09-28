import { InTheBoxProps } from './index.types';
import styles from './index.module.scss';

export function InTheBox({ boxItems }: InTheBoxProps) {
  return (
    <section className={styles.inTheBox}>
      <h2 className={styles.inTheBox__title}>in the box</h2>

      <ul>
        {boxItems.map(({ quantity, description }) => (
          <li key={description}>
            <span className={styles.inTheBox__quantity}>{quantity}x</span>

            <span className={styles.inTheBox__description}>{description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
