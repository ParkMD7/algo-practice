// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION 1 - reverse helper
// function reverse(str) {
//   const splitAndReversed = str.split("").reverse().join("");

//   return splitAndReversed;
// }

// const reverse = (str) => {
//   return str.split("").reverse().join("");
// };

// SOLUTION 2 - (no reverse helper) for loop
// function reverse(str) {
//   let reversedStr = '';

//   // for (let i = 0; i < str.length; i++) {
//   //   reversedStr = str[i] + reversedStr;
//   // }
//   for (let character of str) {
//     reversedStr = character + reversedStr;
//   }

//   return reversedStr;
// }

//  SOLUTION 3 (no reverse helper) reduce
function reverse(str) {
  const reversed = str.split("").reduce((reversedStr, char) => char + reversedStr, "")

  return reversed;
}

module.exports = reverse;
