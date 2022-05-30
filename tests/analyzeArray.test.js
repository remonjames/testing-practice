import analyzeArray from '../js/analyzeArray';

test('[1,2,6] returns {avg: 3, min: 1, max: 6, length: 3}', () => {
  expect(analyzeArray([2, 6, 1]).avg).toEqual(3);
  expect(analyzeArray([2, 6, 1]).min).toEqual(1);
  expect(analyzeArray([2, 6, 1]).max).toEqual(6);
  expect(analyzeArray([2, 6, 1]).length).toEqual(3);
});

test('[] returns null', () => {
  expect(analyzeArray([])).toBeNull();
});
