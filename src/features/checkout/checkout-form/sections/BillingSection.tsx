'use client';

import { TextField } from '@/components/inputs/text-field';
import { maskPhoneNumber } from '@/utils';
import { Controller } from 'react-hook-form';
import styles from '../checkout-form.module.scss';
import { CheckoutFormData } from '../CheckoutForm.types';

export function BillingSection({ checkoutForm }: CheckoutFormData) {
  const {
    register,
    control,
    formState: { errors },
  } = checkoutForm;

  return (
    <div className={styles.checkoutForm__section}>
      <strong className={styles.checkoutForm__section__title}>Checkout</strong>

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
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              inputMask={maskPhoneNumber}
              placeholder="(11) 98765-4321"
              error={Boolean(errors.phone?.message)}
            />
          )}
        />
      </label>
    </div>
  );
}
