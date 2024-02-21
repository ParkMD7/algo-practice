const twoSum = require('./index');

test('twoSum function exists', () => {
  expect(typeof twoSum).toEqual('function');
});

test('Returns indcies of the two numbers such that they add up to the target argument', () => {
  expect(twoSum([2,7,11,15], 9)).toEqual([0, 1] || [1, 0]);
});

test('Works with smaller arrays', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1, 2] || [2, 1]);
});

test('Works with arrays containing the same number', () => {
  expect(twoSum([3,3], 6)).toEqual([0, 1] || [1, 0]);
});
