import capitalize from '../js/capitalize';

test('all lowercase string', () => {
  expect(capitalize('articuno')).toBe('Articuno');
});

test('all uppercase string', () => {
  expect(capitalize('MOLTRES')).toBe('Moltres');
});

test('alrdy capitalized', () => {
  expect(capitalize('Zapdos')).toBe('Zapdos');
});

test('empty string', () => {
  expect(capitalize('')).toBe('');
});
