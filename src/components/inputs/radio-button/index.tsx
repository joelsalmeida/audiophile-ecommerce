import { forwardRef } from 'react';
import styles from './index.module.scss';
import { RadioButtonProps } from './index.types';

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label: labelValue, ...restProps }, ref) => {
    return (
      <label className={styles.radioButton}>
        <input
          type="radio"
          className={styles.radioButton__input}
          {...restProps}
          ref={ref}
        />
        {labelValue}
      </label>
    );
  },
);

RadioButton.displayName = 'RadioButton';
