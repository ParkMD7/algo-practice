const coinChange = require('./index');

test('coinChange function exists', () => {
  expect(typeof coinChange).toEqual('function');
});

test('Finds the lowest number of coins', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
});

test('Returns -1 if the amount can not be reached', () => {
  expect(coinChange([2], 3)).toEqual(-1);
});

test('Returns zero if the amount is zero', () => {
  expect(coinChange([1], 0)).toEqual(0);
});
