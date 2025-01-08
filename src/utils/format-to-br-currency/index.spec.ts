import { expect, test } from 'vitest';
import { formatToBrCurrency } from '.';

test('Should return the value formatted in Brazilian currency.', () => {
  const EXPECTED_VALUE = 'R$ 99,00';
  expect(formatToBrCurrency(9900)).to.equal(EXPECTED_VALUE);
});
