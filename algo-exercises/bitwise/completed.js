// --- Directions
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

// --- Examples
// rangeBitwiseAnd(5, 7) === 4
// rangeBitwiseAnd(0, 0) === 0
// rangeBitwiseAnd(1, 2147483647) === 0

// to run tests from the algo-exercises directory: `jest bitwise/test.js --watch`


function rangeBitwiseAnd(left, right) {
  let res = left;

  for (let i = left + 1; i <= right; i++) {
    res = res & i; 
  }

  return res;
}

module.exports = rangeBitwiseAnd;
