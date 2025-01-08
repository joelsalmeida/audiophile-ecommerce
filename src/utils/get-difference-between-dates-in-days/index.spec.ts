import { expect, test } from 'vitest';
import { getDifferenceBetweenDatesInDays } from '.';

test('The difference between equal dates should be equal to 0.', () => {
  expect(getDifferenceBetweenDatesInDays(new Date(), new Date())).toBe(0);
});

test('The difference between 2024-12-24 and 2024-12-31 should be equal to 7.', () => {
  expect(
    getDifferenceBetweenDatesInDays(
      new Date('2024-12-24'),
      new Date('2024-12-31'),
    ),
  ).toBe(7);
});

test('The difference between 2024-12-31 and 2024-12-24 should be equal to 7 too.', () => {
  expect(
    getDifferenceBetweenDatesInDays(
      new Date('2024-12-31'),
      new Date('2024-12-24'),
    ),
  ).toBe(7);
});
