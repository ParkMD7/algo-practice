// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 1
function vowels(str) {
  const isVowel = (s) => ['a', 'e', 'i', 'o', 'u'].includes(s);

  return str
    .toLowerCase()
    .split("")
    .filter((char) => isVowel(char))
    .length
}

// solution 2
function vowels(str) {
  const isVowel = (s) => ['a', 'e', 'i', 'o', 'u'].includes(s);
  let counter = 0

  for (let char of str.toLowerCase()) {
    if (isVowel(char)) {
      counter++;
    }
  }

  return counter
}

module.exports = vowels;
