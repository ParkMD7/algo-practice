const palindromeNum = require('./index');

test('palindromeNum function is defined', () => {
  expect(typeof palindromeNum).toEqual('function');
});

test('121 is a palindrome number', () => {
  expect(palindromeNum(121)).toBeTruthy();
});

test('-121 is not a palindrome number', () => {
  expect(palindromeNum(-121)).toBeTruthy();
});

test('10 is not a palindrome number', () => {
  expect(palindromeNum(10)).toBeFalsy();
});

test('107 is not a palindrome number', () => {
  expect(palindromeNum(107)).toBeFalsy();
});
