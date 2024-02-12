const maxNum = require('./index');

test('maxNum function exists', () => {
  expect(typeof maxNum).toEqual('function');
});

test('Finds the most frequently used num', () => {
  expect(maxNum([1])).toEqual(1);
  expect(maxNum([1, 1, 2, 3])).toEqual(1);
});

test('Works with really long strings with random chars', () => {
  expect(maxNum([1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9])).toEqual(7);
});
