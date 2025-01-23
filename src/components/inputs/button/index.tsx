import type {
  ButtonAsLinkProps,
  ButtonAsButtonProps,
  ButtonProps,
} from './index.types';
import styles from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Button({
  children,
  variant,
  asLink,
  fullWidth = false,
  ...restProps
}: ButtonProps) {
  if (asLink) {
    const { href, ...linkProps } = restProps as ButtonAsLinkProps;

    return (
      <Link
        href={href}
        className={styles.button}
        data-variant={variant}
        data-full-width={fullWidth}
        {...linkProps}
      >
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
      </Link>
    );
  }

  return (
    <button
      className={styles.button}
      data-variant={variant}
      data-full-width={fullWidth}
      {...(restProps as ButtonAsButtonProps)}
    >
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
