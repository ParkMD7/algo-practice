// --- Directions
// Given a string, return the longest substring of non-repeating chars

// --- Examples
// maxSubstring("abcccccccd") === "abc"
// maxSubstring("apple 1231111") === "ple 1231"

function maxSubstring(str) {
  let longestSubstring = "";
  let currentSubstring = "";
  let previousChar = "";

  for (let char of str) {
    // check if the current char is equal to the previous char
    if (char !== previousChar) {
      currentSubstring += char;
    } else {
      currentSubstring = char;
    }

    // set previous char
    previousChar = char;

    // check for longest substring
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }


  return longestSubstring;
}

module.exports = maxSubstring;
