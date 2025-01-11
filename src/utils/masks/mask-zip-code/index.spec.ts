import { expect, test } from 'vitest';
import { maskZipCode } from '.';

test('Should remove non-numeric characters.', () => {
  expect(maskZipCode('XYZ')).to.equal('');

  expect(maskZipCode('X Y Z')).to.equal('');

  expect(maskZipCode('Z # .')).to.equal('');

  expect(maskZipCode('Z  9 # . 9')).to.equal('99');
});

test('Should mask the value as zip code correctly.', () => {
  expect(maskZipCode('12')).to.equal('12');

  expect(maskZipCode('12345')).to.equal('12345');

  expect(maskZipCode('12345678')).to.equal('12345-678');
});

test('Should remove extra characters.', () => {
  expect(maskZipCode('123456789')).to.equal('12345-678');
});
