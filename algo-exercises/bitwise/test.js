const rangeBitwiseAnd = require('./index');

test('rangeBitwiseAnd function exists', () => {
  expect(typeof rangeBitwiseAnd).toEqual('function');
});

test('Finds the missing number', () => {
  expect(rangeBitwiseAnd(5, 7)).toEqual(4);
});

test('Works numbers at the end of the array', () => {
  expect(rangeBitwiseAnd(0, 0)).toEqual(0);
});

test('Works numbers at the end of the array', () => {
  expect(rangeBitwiseAnd(1, 2147483647)).toEqual(0);
});

