const pangram = require('./index');

test('pangram function exists', () => {
  expect(typeof pangram).toEqual('function');
});

test('Finds determines if a string is a pangram', () => {
  expect(pangram('a')).toEqual(false);
});

test('Works with numbers in the string and capitalizations', () => {
  expect(pangram('The Quick 1 broWn fox 2 jumps over 3 the laZY DOG')).toEqual(true);
});
