const romanToInteger = require('./index');

test('romanToInteger function is defined', () => {
  expect(typeof romanToInteger).toEqual('function');
});

test('calculates correct integer from roman numeral value for I', () => {
  expect(romanToInteger("I")).toEqual(1);
});

test('calculates correct integer from roman numeral value for III', () => {
  expect(romanToInteger("III")).toEqual(3);
});

test('calculates correct integer from roman numeral value for LVIII', () => {
  expect(romanToInteger("LVIII")).toEqual(58);
});

test('calculates correct integer from roman numeral value for MCMXCIV', () => {
  expect(romanToInteger("MCMXCIV")).toEqual(1994);
});
