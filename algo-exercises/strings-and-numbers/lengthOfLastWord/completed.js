// --- Directions
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// --- Examples
//   lengthOfLastWord("Hello World")
//     "5"
//   lengthOfLastWord("   fly me   to   the moon  ")
//     "4"
//  lengthOfLastWord("luffy is still joyboy")
//     "6"

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(str) {
  let lastWord = "";

  for (let word of str.split(" ")) {
    if (!!word.length) {
      lastWord = word;
    }
  }

  return lastWord.length;
}

module.exports = lengthOfLastWord;
