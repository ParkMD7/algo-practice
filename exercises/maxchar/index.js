// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let stringMap = {};

  for (let char of str) {
    stringMap[char] = stringMap[char] + 1 || 1;
  }

  let maxChar;
  let maxCharLength = 0;

  for (let key in stringMap) {
    console.log('key', key)
    console.log("maxChar before loop", maxChar);
    console.log("maxCharLength before loop", maxCharLength);
    if (stringMap[key] > maxCharLength) {
      maxChar = key;
      maxCharLength = stringMap[key];
    }

    console.log("maxChar after loop", maxChar);
    console.log("maxCharLength after loop", maxCharLength);
  }

  return maxChar;
}

module.exports = maxChar;
