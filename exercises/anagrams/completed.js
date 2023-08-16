// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// solution 1
function buildCharMap(str) {
  let charMap = {};

  for (char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams(stringA, stringB) {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);
  console.log('charMapA', charMapA)
  console.log('charMapB', charMapB)

  // check for char counts
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  // check for char keys/values
  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) {
      return false;
    }
  }

  return true;
}


// solution 2
function cleanedAndSortedString(str) {
  const cleanedString = str.replace(/[^\w]/g, "").toLowerCase();
  const sortedString = cleanedString.split("").sort().join("");

  return sortedString;
}

function anagrams(stringA, stringB) {
  const cleanedAndSortedA = cleanedAndSortedString(stringA);
  const cleanedAndSortedB = cleanedAndSortedString(stringB);

  console.log('cleanedAndSortedA', cleanedAndSortedA)
  console.log('cleanedAndSortedB', cleanedAndSortedB)
  return cleanedAndSortedA === cleanedAndSortedB;
}

module.exports = anagrams;
