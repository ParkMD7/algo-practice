// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strMap = {};
  let maxChar = 0;
  let mostUsed;

  // iterate through the string & create a hash of values
  for (let char of str) {
    strMap[char] = strMap[char] + 1 || 1;
  }

  // loop through the hash and set variables equal to the most common
  for (let key in strMap) {
    if (strMap[key] > maxChar) {
      maxChar = strMap[key];
      mostUsed = key;
    }
  }

  return mostUsed;
}

module.exports = maxChar;
