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
  let prevChar = "";
  let count = 0;
  let lookNSee = "";

  str.split("").forEach((char, idx) => {
    console.log("char", char);
    if (!prevChar || prevChar === char) {
      prevChar = char;
      count++;
    } else {
      lookNSee += `${count}${prevChar}`;
      count = 1;
      prevChar = char;
    }

    // edge case for last idx
    if (idx === str.length -1) {
      lookNSee += `${count}${char}`;
    }
  });

  return lookNSee;
}

module.exports = lookNsee;
