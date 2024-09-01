import { Button } from '../inputs/button';
import styles from './index.module.scss';

export function Hero() {
  return (
    <div className={styles.hero__container}>
      <div className={styles.hero}>
        <span className={styles.hero__overline}>NEW PRODUCT</span>

        <h1 className={styles.hero__header}>XX99 Mark II HeadphoneS</h1>

        <p className={styles.hero__description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        {/* TODO: Add scroll behavior*/}
        <Button variant="contained">See Product</Button>
      </div>
    </div>
  );
}
