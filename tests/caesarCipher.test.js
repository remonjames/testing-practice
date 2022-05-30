import caesarCypher from '../js/caesarCypher';

test('("brutus", 2) becomes "dtwvwu"', () => {
  expect(caesarCypher('brutus', 2)).toBe('dtwvwu');
});

test('("Attack On Dawn", 3) becomes "Dwwdfn Rq Gdzq"', () => {
  expect(caesarCypher('Attack on dawn', 3)).toBe('Dwwdfn rq gdzq');
});

test('("Don\'t falter!", 3) becomes "Epo\'u gbmufs!"', () => {
  expect(caesarCypher("Don't falter!", 1)).toBe("Epo'u gbmufs!");
});

test('("key is greater than 25"', () => {
  expect(caesarCypher('invalid key', 27)).toBeUndefined();
});

test('("key is less than 0"', () => {
  expect(caesarCypher('invalid key', -5)).toBeUndefined();
});
