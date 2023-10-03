// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function createMatrixArray(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([])
  }

  return matrix;
}

function matrix(n) {
  const matrix = createMatrixArray(n);

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (startRow <= endRow && startColumn <= endColumn) {
    // TOP ROW
    // iterate through startRow and assign n values
    // then increment the startRow (aka move it down)
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter;
      counter++
    }
    startRow++ 

    // RIGHT SIDE
    // iterate from startRow to endRow and assign n values
    // then decrement the endColumn (aka move it left)
    for (let i = startRow; i <= endRow; i++) {
      console.log('i', i)
      matrix[i][endColumn] = counter;
      counter++
    }
    endColumn--

    // BOTTOM ROW
    // reverse iterate through endRow and assign n values
    // then decrement the endRow (aka move it up)
    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter;
      counter++ 
    }
    endRow--

    // LEFT SIDE
    // reverse iterate through startColumn and assign n values
    // then increment the startColumn (aka move it right)
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter
      counter++
    }
    startColumn++
  }

  return matrix;
}

module.exports = matrix;
