import reversedString from '../js/reversedString';

test('one word', () => {
  expect(reversedString('Filibuster')).toBe('retsubiliF');
});

test('multiple words', () => {
  expect(reversedString('Touch Me Not')).toBe('toN eM hcuoT');
});

test('empty str', () => {
  expect(reversedString('')).toBe('');
});
