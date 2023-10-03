// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// first solution - iteration
function steps(n) {
  // iterate through rows
  // create an empty string called stair
  for (let row = 0; row < n; row++) {
    let stair = "";

    // iterate through column
    // IF the current column is less than or equal to the current row then add a "#", if not then add a " "
    for (let column = 0; column < n; column++) {
      // console.log('stair before', stair)
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
      // console.log('stair after', stair)
    }
    console.log(stair);
  }
}

// second solution - recursion
function steps(n, row = 0, step = '') {
  // base case -- if row === n then return
  // add a new arg to the steps fn for "row" and default it to 0
  if (row === n) return

  // if step length === n then we are ready to print the row
  if (step.length === n) {
    console.log(step)
    steps(n, row + 1, '')
    return;
  };

  // if the length of the stair <= row then add a '#' else ' '
  if (step.length <= row) {
    step += '#'
  } else {
    step += ' '
  }

  steps(n, row, step)
}

module.exports = steps;
