import { TextFieldProps } from './index.types';
import styles from './index.module.scss';

export function TextField({ error = false, ...restProps }: TextFieldProps) {
  return (
    <input
      type="text"
      className={styles.textField}
      data-error={error}
      {...restProps}
    />
  );
}
