'use client';

import { RadioButton } from '@/components/inputs/radio-button';
import { TextField } from '@/components/inputs/text-field';
import styles from './index.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutFormDataType,
  checkoutFormSchema,
} from './schemas/checkoutFormSchema';

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormSchema),
  });

  console.log('##### ERRORS: ', errors);

  const handleOnSubmit: SubmitHandler<CheckoutFormDataType> = (data) => {
    console.log('##### DATA: ', data);
  };

  return (
    <form
      className={styles.checkoutForm}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className={styles.checkoutForm__section}>
        <h2>Billing Details</h2>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            Name
            <TextField
              {...register('name')}
              placeholder="John Doe"
              error={Boolean(errors.name?.message)}
            />
          </label>

          <label className={styles.checkoutForm__label}>
            E-mail
            <TextField
              {...register('email')}
              placeholder="john.doe@mail.com"
              error={Boolean(errors.email?.message)}
            />
          </label>
        </div>

        <label className={styles.checkoutForm__label}>
          Phone Number
          <TextField
            {...register('phone')}
            placeholder="+55 11 99876-5432"
            error={Boolean(errors.phone?.message)}
          />
        </label>
      </div>

      <div className={styles.checkoutForm__section}>
        <h2>Shipping info</h2>

        <label className={styles.checkoutForm__label}>
          Address
          <TextField
            {...register('address')}
            placeholder="1137 Williams Avenue"
            error={Boolean(errors.address?.message)}
          />
        </label>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            Zip Code
            <TextField
              {...register('zipCode')}
              placeholder="98987-654"
              error={Boolean(errors.zipCode?.message)}
            />
          </label>

          <label className={styles.checkoutForm__label}>
            City
            <TextField
              {...register('city')}
              placeholder="New York"
              error={Boolean(errors.city?.message)}
            />
          </label>
        </div>

        <label className={styles.checkoutForm__label}>
          Country
          <TextField
            {...register('country')}
            placeholder="United States"
            error={Boolean(errors.country?.message)}
          />
        </label>
      </div>

      <div className={styles.checkoutForm__section}>
        <h2>Payment details</h2>

        <div className={styles.checkoutForm__inputContainer}>
          <span className={styles.checkoutForm__label}>Payment Method</span>

          <div className={styles.checkoutForm__inputContainer__item}>
            <RadioButton
              {...register('paymentMethod')}
              label="e-Money"
              id="e-money"
              value="e-money"
            />
            <RadioButton
              {...register('paymentMethod')}
              label="Cash on Delivery"
              id="cash-on-delivery"
              value="cash-on-delivery"
            />
          </div>
        </div>

        <div className={styles.checkoutForm__inputContainer}>
          <label className={styles.checkoutForm__label}>
            e-Money Number
            <TextField
              {...register('eMoneyNumber')}
              placeholder="238521993"
              error={Boolean(errors.eMoneyNumber?.message)}
            />
          </label>

          <label className={styles.checkoutForm__label}>
            e-Money PIN
            <TextField
              {...register('eMoneyPin')}
              placeholder="6891"
              error={Boolean(errors.eMoneyPin?.message)}
            />
          </label>
        </div>
      </div>

      <button type="submit">SEND</button>
    </form>
  );
}
