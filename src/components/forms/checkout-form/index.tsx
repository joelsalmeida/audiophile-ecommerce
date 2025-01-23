'use client';

import { RadioButton } from '@/components/inputs/radio-button';
import { TextField } from '@/components/inputs/text-field';
import styles from './index.module.scss';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutFormDataType,
  checkoutFormSchema,
} from './schemas/checkoutFormSchema';
import { useGetZipCodeData } from '@/custom-hooks';
import { maskPhoneNumber, maskZipCode } from '@/utils';

export function CheckoutForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<CheckoutFormDataType>({
    resolver: zodResolver(checkoutFormSchema),
  });

  console.log('##### ERRORS: ', errors);

  const ZIP_CODE = watch('zipCode');

  const {
    data: zipCodeData,
    isLoading,
    error,
  } = useGetZipCodeData(Number(ZIP_CODE?.replace('-', '')));

  if (zipCodeData) {
    setValue('address', zipCodeData.street);
    setValue('city', zipCodeData.city);
    setValue('country', 'Brazil');
  }

  console.log('##### CheckoutForm ZIP CODE: ', zipCodeData, isLoading, error);

  const handleOnSubmit: SubmitHandler<CheckoutFormDataType> = (data) => {
    console.log('##### DATA: ', data);
  };

  return (
    <form
      className={styles.checkoutForm}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className={styles.checkoutForm__section}>
        <strong className={styles.checkoutForm__section__title}>
          Checkout
        </strong>

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
    </form>
  );
}
