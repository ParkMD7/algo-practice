// --- Directions
// Given an integer, return true if the integer is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed.

// --- Examples:
//   palindrome(121) === true
//   palindrome(10) === false

// to run tests from the algo-exercises directory: `jest strings-and-numbers/palindromenum/test.js --watch`

function palindromeNum(num) {
  const sign = Math.sign(num);
  const reversedNum = parseInt(num.toString().split("").reverse().join(""));

  return reversedNum * sign === num;
}

module.exports = palindromeNum;
