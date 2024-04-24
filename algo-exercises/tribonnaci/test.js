const tribonacci = require('./index');

test('tribonacci function is defined', () => {
  expect(typeof tribonacci).toEqual('function');
});

test('calculates correct tribonacci value for 1', () => {
  expect(tribonacci(1)).toEqual(1);
});

test('calculates correct tribonacci value for 2', () => {
  expect(tribonacci(2)).toEqual(1);
});

test('calculates correct tribonacci value for 3', () => {
  expect(tribonacci(3)).toEqual(2);
});

test('calculates correct tribonacci value for 4', () => {
  expect(tribonacci(4)).toEqual(4);
});

test('calculates correct tribonacci value for 25', () => {
  expect(tribonacci(25)).toEqual(1389537);
});
