import * as z from 'zod';

const PAYMENT_METHODS = ['cash-on-delivery', 'e-money'] as const;

export const checkoutFormSchema = z.object({
  // BILLING
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().length(13),

  // SHIPPING
  address: z.string().min(1),
  zipCode: z.string().length(8),
  city: z.string().min(1),
  country: z.string().min(1),

  // PAYMENT
  paymentMethod: z.enum(PAYMENT_METHODS),
  eMoneyNumber: z.string().length(9),
  eMoneyPin: z.string().length(4),
});

export type CheckoutFormDataType = z.infer<typeof checkoutFormSchema>;
