import { forwardRef } from 'react';
import { TextFieldProps } from './index.types';
import styles from './index.module.scss';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error = false, inputMask, ...restProps }, ref) => {
    const IS_AN_UNMASKED_INPUT = !inputMask;

    if (IS_AN_UNMASKED_INPUT) {
      return (
        <input
          {...restProps}
          type="text"
          className={styles.textField}
          data-error={error}
          ref={ref}
        />
      );
    }

    const { value, onChange } = restProps;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const maskedValue = inputMask(event.target.value);

      onChange?.({
        ...event,
        target: { ...event.target, value: maskedValue },
      });
    };

    return (
      <input
        {...restProps}
        type="text"
        className={styles.textField}
        data-error={error}
        value={value || ''}
        onChange={handleOnChange}
        ref={ref}
      />
    );
  },
);

TextField.displayName = 'TextField';
