const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

test('Works with really long strings with random chars', () => {
  expect(maxChar('a b 1c 1d 1 eXXXXXXXXXXXXXXXXX1f 1g 1 ')).toEqual('X');
});
