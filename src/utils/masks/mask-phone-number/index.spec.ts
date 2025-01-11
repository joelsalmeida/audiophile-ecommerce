import { expect, test } from 'vitest';
import { maskPhoneNumber } from '.';

test('Should remove non-numeric characters.', () => {
  expect(maskPhoneNumber('XYZ')).to.equal('');

  expect(maskPhoneNumber('X Y Z')).to.equal('');

  expect(maskPhoneNumber('Z # .')).to.equal('');

  expect(maskPhoneNumber('Z  9 # . 9')).to.equal('99');
});

test('Should mask the value as phone number correctly.', () => {
  expect(maskPhoneNumber('99')).to.equal('99');

  expect(maskPhoneNumber('99 12345')).to.equal('(99) 12345');

  expect(maskPhoneNumber('99 12345 6789')).to.equal('(99) 12345-6789');
});

test('Should remove extra characters.', () => {
  expect(maskPhoneNumber('99 12345 6789 10')).to.equal('(99) 12345-6789');
});
