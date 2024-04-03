const lengthOfLastWord = require('./index.js');

test('lengthOfLastWord function exists', () => {
  expect(typeof lengthOfLastWord).toEqual('function');
});

test('it returns the length of the last word', () => {
  expect(lengthOfLastWord("Hello World")).toEqual(5);
});

test('it should ignore words that end in whitespace', () => {
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
});
