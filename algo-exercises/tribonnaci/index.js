// --- Directions
// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// to run tests from the algo-exercises directory: `jest coinchange/test.js --watch`

/**
 * @param {number} n
 * @return {number}
 */

function tribonacci(n) {
  let fibArray = [0, 1, 1];

  for (let i = fibArray.length - 1; i < n; i++) {
    const previousNumber = fibArray[i - 1];
    const previousPreviousNumber = fibArray[i - 2];

    const fibNumber = previousNumber + previousPreviousNumber + fibArray[i];
    fibArray.push(fibNumber);
  }

  return fibArray[n];
}

module.exports = tribonacci;
