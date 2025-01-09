import { fetcher } from '@/utils';
import useSWR from 'swr';

export function useGetZipCodeData(zipCode: number) {
  const zipCodeWith8Digits = zipCode.toString().length === 8;

  const apiUrlOrNull = zipCodeWith8Digits
    ? `https://brasilapi.com.br/api/cep/v2/${zipCode}`
    : null;

  const { data, error, isLoading } = useSWR(apiUrlOrNull, fetcher);

  const zipCodeDataOrNull = data
    ? {
        city: data?.city,
        state: data?.state,
        street: data?.street,
      }
    : null;

  return {
    data: zipCodeDataOrNull,
    error,
    isLoading,
  };
}
