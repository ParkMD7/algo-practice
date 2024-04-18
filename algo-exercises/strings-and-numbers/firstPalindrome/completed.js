// --- Directions
// Given an array of strings words, return the first palindromic string in the array.
// If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// --- Examples:
//   firstPalindrome(["abc","car","ada","racecar","cool"]) === "ada"
//   firstPalindrome(["notapalindrome","racecar"]) === "racecar"
//   firstPalindrome(["def","ghi"]) === ""

// to run tests from the algo-exercises directory: `jest strings-and-numbers/firstPalindrome/test.js --watch`

/**
 * @param {string[]} words
 * @return {string}
 */

const checkIsPalindrome = (word) => {
  return word === word.split("").reverse().join("");
};

function firstPalindrome(words) {
  return words.find((word) => checkIsPalindrome(word)) || "";
}

module.exports = firstPalindrome;
