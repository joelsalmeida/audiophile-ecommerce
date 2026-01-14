'use client';

import { TextField } from '@/components/inputs/text-field';
import { maskZipCode } from '@/utils';
import { Controller } from 'react-hook-form';
import styles from '../checkout-form.module.scss';
import { CheckoutFormData } from '../CheckoutForm.types';

export function ShippingSection({ checkoutForm }: CheckoutFormData) {
  const {
    register,
    control,
    formState: { errors },
  } = checkoutForm;

  return (
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
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                inputMask={maskZipCode}
                placeholder="98987-654"
                error={Boolean(errors.zipCode?.message)}
              />
            )}
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
  );
}
