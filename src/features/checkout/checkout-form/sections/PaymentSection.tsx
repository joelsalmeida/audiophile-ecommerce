'use client';

import { RadioButton } from '@/components/inputs/radio-button';
import { TextField } from '@/components/inputs/text-field';
import Image from 'next/image';
import { Controller } from 'react-hook-form';
import styles from '../checkout-form.module.scss';
import { CheckoutFormData } from '../CheckoutForm.types';

export function PaymentSection({ checkoutForm }: CheckoutFormData) {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = checkoutForm;

  const [PAYMENT_METHOD] = watch(['paymentMethod']);
  const IS_CASH_ON_DELIVERY = PAYMENT_METHOD === 'cash-on-delivery';

  return (
    <>
      <div className={styles.checkoutForm__section}>
        <h2>Payment details</h2>

        <div className={styles.checkoutForm__inputContainer}>
          <span className={styles.checkoutForm__label}>Payment Method</span>

          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <div className={styles.checkoutForm__inputContainer__item}>
                <RadioButton
                  {...field}
                  label="e-Money"
                  id="e-money"
                  value="e-money"
                  checked={field.value === 'e-money'}
                />

                <RadioButton
                  {...field}
                  label="Cash on Delivery"
                  id="cash-on-delivery"
                  value="cash-on-delivery"
                  checked={field.value === 'cash-on-delivery'}
                />
              </div>
            )}
          />
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

      {IS_CASH_ON_DELIVERY && (
        <div className={styles.checkoutForm__paymentInfo}>
          <Image
            src="/checkout/icon-cash-on-delivery.svg"
            alt=""
            width={48}
            height={48}
          />

          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </>
  );
}
