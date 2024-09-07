import styles from './index.module.scss';

// TODO: This component could be more flexible, but for now it works fine like this.
export function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <picture className={styles.aboutSection__image}>
        <source
          media="(min-width:1110px)"
          srcSet="/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/shared/tablet/image-best-gear.jpg"
        />
        <img
          className={styles.aboutSection__image__img}
          src="/shared/mobile/image-best-gear.jpg"
          alt="Flowers"
        />
      </picture>

      <div className={styles.aboutSection__content}>
        <h2 className={styles.aboutSection__content__title}>
          Bringing you the <span>best</span> audio gear
        </h2>

        <p className={styles.aboutSection__content__description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
