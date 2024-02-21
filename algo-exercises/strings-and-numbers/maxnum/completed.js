// --- Directions
// Given an array of numbers, return the number that is most commonly occuring.

// --- Examples
// maxNum([1, 1, 2]) === 1
// maxNum([1, 2, 3, 4, 5, 6, 7, 7, 7, 8]) === "1"

// Time complexity: O(n)O(n)O(n)
// Space complexity: O(n)O(n)O(n)

function maxNum(nums) {
  let numMap = {};
  let mostCommonNum;
  let mostCommonNumCount = 0;

  for (let num of nums) {
    numMap[num] = numMap[num] + 1 || 1;

    if (numMap[num] > mostCommonNumCount) {
      mostCommonNum = num;
      mostCommonNumCount = numMap[num];
    }
  }

  return mostCommonNum;
}

module.exports = maxNum;
