import { add, subtract, multiply, divide } from '../js/calculator';

test('add(30, 12) is 42', () => {
  expect(add(30, 12)).toEqual(42);
});

test('subtract(10, 7) is 3', () => {
  expect(subtract(10, 7)).toEqual(3);
});

test('multiply(7, -7) is -49', () => {
  expect(multiply(7, -7)).toEqual(-49);
});

test('divide(63, 9) is 7', () => {
  expect(divide(63, 9)).toEqual(7);
});

test('divide(5, 0) is undefined', () => {
  expect(divide(5, 0)).toBeUndefined();
});
