// --- Directions
// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin

// --- Examples
// coinChange([1, 2, 5], 11) === 3
// coinChange([2], 3) === -1
// coinChange([1], 0) === 0

// to run tests from the algo-exercises directory: `jest coinchange/test.js --watch`

function coinChange(coinArray, amount) {
  // create an array for the total amount + 1 (start from zero) && fill it with an invalid value
  let coinsPerAmountArr = Array(amount + 1).fill(Infinity);

  // create a base case
  coinsPerAmountArr[0] = 0;

  // start a loop from 1 to amount to iterate over all values in the range
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {

    // start a loop for each coin in my coinArray
    for (let coin of coinArray) {
      // check if I can make a valid amount
      if (currentAmount - coin >= 0) {
        // set the currentAmount in the coinsPerAmountArr to the lesser of:
        // current value ~OR~ 1 plus difference between currentAmount - coin
        coinsPerAmountArr[currentAmount] = Math.min(
          coinsPerAmountArr[currentAmount],
          1 + coinsPerAmountArr[currentAmount - coin]
        )
      }
    }
  }

  return coinsPerAmountArr[amount] > amount ? -1 : coinsPerAmountArr[amount];
}

module.exports = coinChange;
