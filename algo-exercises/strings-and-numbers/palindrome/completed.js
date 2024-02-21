// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// SOLUTION 1 - reduce
function palindrome(str) {
  const reversedStr = str.split("").reduce((rev, char) => char + rev, "");
  const isPalindrome = str === reversedStr;

  return isPalindrome;
}

// SOLUTION 2 - for loop
// function palindrome(str) {
//   let reversedStr = '';

//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }

//   return reversedStr === str;
// }

module.exports = palindrome;
