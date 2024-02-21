const missingNumber = require('./index');

test('missingNumber function exists', () => {
  expect(typeof missingNumber).toEqual('function');
});

test('Finds the missing number', () => {
  expect(missingNumber([3,0,1])).toEqual(2);
});

test('Works numbers at the end of the array', () => {
  expect(missingNumber([0,1])).toEqual(2);
});

test('Works numbers at the start of the array', () => {
  expect(missingNumber([1,2])).toEqual(0);
});

test('Works with really longer arrays', () => {
  expect(missingNumber([9,6,4,2,3,5,7,0,1])).toEqual(8);
});
