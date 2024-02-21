// --- Directions
// Write a function that accepts string of numbers
// and returns a look and see of the string.
// Basically it reads the string phoenetically
// as an example: lookNsee("111221")
// 31 (three ones) 22 (two twos) 11 (one one)

// --- Examples
//   lookNsee("1")
//     "11"
//   lookNsee("111221")
//     "312211"
//  lookNsee("31131211131221")
//     "13211311123113112211"

function lookNsee(str) {
  let count = 0;
  let previousChar = "";
  let result = "";

  str.split("").forEach((char, idx) => {
    if (!previousChar || previousChar === char) {
      count++;
      previousChar = char;
    } else {
      result += `${count}${previousChar}`;
      previousChar = char;
      count = 1;
    }

    // handle edge case for last char
    if (idx === str.length - 1) {
      result += `${count}${char}`;
    }
  })

  return result;
}

module.exports = lookNsee;
