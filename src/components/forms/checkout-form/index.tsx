import { RadioButton } from '@/components/inputs/radio-button';
import { TextField } from '@/components/inputs/text-field';
import styles from './index.module.scss';

export function CheckoutForm() {
  return (
    <form className={styles.checkoutForm}>
      <div className={styles.checkoutForm__section}>
        <h2>Billing Details</h2>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            Name
            <TextField placeholder="John Doe" />
          </label>

          <label className={styles.checkoutForm__label}>
            E-mail
            <TextField placeholder="john.doe@mail.com" />
          </label>
        </div>

        <label className={styles.checkoutForm__label}>
          Phone Number
          <TextField placeholder="+55 11 99876-5432" />
        </label>
      </div>

      <div className={styles.checkoutForm__section}>
        <h2>Shipping info</h2>

        <label className={styles.checkoutForm__label}>
          Address
          <TextField placeholder="1137 Williams Avenue" />
        </label>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            Zip Code
            <TextField placeholder="98987-654" />
          </label>

          <label className={styles.checkoutForm__label}>
            City
            <TextField placeholder="New York" />
          </label>
        </div>

        <label className={styles.checkoutForm__label}>
          Country
          <TextField placeholder="United States" />
        </label>
      </div>

      <div className={styles.checkoutForm__section}>
        <h2>Payment details</h2>

        <div className={styles.checkoutForm__inputContainer}>
          <span className={styles.checkoutForm__label}>Payment Method</span>

          <div className={styles.checkoutForm__inputContainer__item}>
            <RadioButton label="e-Money" name="payment-method" id="e-money" />
            <RadioButton
              label="Cash on Delivery"
              name="payment-method"
              id="cash-on-delivery"
            />
          </div>
        </div>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            e-Money Number
            <TextField placeholder="238521993" />
          </label>

          <label className={styles.checkoutForm__label}>
            e-Money PIN
            <TextField placeholder="6891" />
          </label>
        </div>
      </div>
    </form>
  );
}
