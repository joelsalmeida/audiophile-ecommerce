import styles from './index.module.scss';
import { RadioButtonProps } from './index.types';

export function RadioButton({
  label: labelValue,
  ...restProps
}: RadioButtonProps) {
  return (
    <label className={styles.radioButton}>
      <input
        type="radio"
        className={styles.radioButton__input}
        {...restProps}
      />
      {labelValue}
    </label>
  );
}
