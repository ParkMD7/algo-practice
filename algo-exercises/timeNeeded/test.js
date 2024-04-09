const timeNeeded = require('./index.js');

test('timeNeeded function exists', () => {
  expect(typeof timeNeeded).toEqual('function');
});

test('it returns the time taken for the person at position k (0-indexed) to finish buying tickets.', () => {
  expect(timeNeeded([2,3,2], 2)).toEqual(6);
});

test('it works for larger numbers', () => {
  expect(timeNeeded([50,1,99,10], 2)).toEqual(160);
});
