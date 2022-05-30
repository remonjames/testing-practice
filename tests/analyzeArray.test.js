import analyzeArray from '../js/analyzeArray';

test('[1,2,6] returns {avg: 3, min: 1, max: 6, length: 3}', () => {
  expect(analyzeArray([2, 6, 1])).toEqual({
    avg: 3,
    min: 1,
    max: 6,
    length: 3,
  });
});

test('[] returns null', () => {
  expect(analyzeArray([])).toBeNull();
});
