// --- Directions
// Given a string, return true if the string has every letter of the alphabet
// and false if not. You should ignore whitespace and non-letter chars
// and also ignore capitalizations

// --- Examples
// pangram("abcccccccd") === false
// pangram("The quick brown fox jumps over the lazy dog") === true

// hint: this is the regex you need  str.replace(/[^a-zA-Z]+/g, '').toLowerCase()

function createLetterMap(str) {
  const cleanedString = str.replace(/[^a-zA-Z]+/g, '').toLowerCase();
  let letterMap = {};

  for (let char of cleanedString) {
    letterMap[char] = letterMap[char] + 1 || 1;
  }

  return letterMap;
}

function pangram(str) {
  const letterMap = createLetterMap(str);

  return Object.keys(letterMap).length === 26;
}

module.exports = pangram;
