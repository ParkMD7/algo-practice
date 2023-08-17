// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution 1
function pyramid(n) {
  // column number is different between this problem and normal steps problem
  // we need to calc the column amount (double the number of rows - 1)
  const columnLength = 2 * n - 1;
  const midpoint = Math.floor(columnLength / 2);

  for (let row = 0; row < n; row++) {
    let step = "";

    for (let column = 0; column < columnLength; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

module.exports = pyramid;

//       column
// row   | | |x| | |
//       | |x|x|x| |
//       |x|x|x|x|x|
