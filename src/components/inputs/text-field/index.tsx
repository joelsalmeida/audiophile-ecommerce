import { forwardRef } from 'react';
import { TextFieldProps } from './index.types';
import styles from './index.module.scss';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error = false, ...restProps }, ref) => {
    return (
      <input
        type="text"
        className={styles.textField}
        data-error={error}
        {...restProps}
        ref={ref}
      />
    );
  },
);

TextField.displayName = 'TextField';
