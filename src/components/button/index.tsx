import type { ButtonProps } from './index.types';
import styles from './index.module.scss';
import Image from 'next/image';

export function Button({ children, variant, ...restProps }: ButtonProps) {
  return (
    <button className={styles.button} data-variant={variant} {...restProps}>
      {children}

      {variant === 'text' && (
        <Image
          className={styles.button__icon}
          src="/arrow-right-icon.svg"
          alt="Arrow right"
          width={5}
          height={10}
        />
      )}
    </button>
  );
}
