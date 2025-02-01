import { CartResumeProps } from '@/components/cart-resume/index.types';
import { ApolloError } from '@apollo/client';

export type cartResumeDataType = {
  data: CartResumeProps | undefined;
  loading: boolean;
  error: ApolloError | undefined;
};
