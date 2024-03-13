const pivotInt = require('./index');

test('pivotInt function exists', () => {
  expect(typeof pivotInt).toEqual('function');
});

test('Finds the sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.', () => {
  expect(pivotInt(8)).toEqual(6);
});

test('It works with the number 1', () => {
  expect(pivotInt(1)).toEqual(1);
});

test('It returns -1 if no such integer exists', () => {
  expect(pivotInt(0)).toEqual(-1);
});
