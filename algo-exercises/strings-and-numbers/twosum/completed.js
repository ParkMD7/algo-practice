// --- Directions
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// --- Examples
// twoSum([2,7,11,15], 9) === [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// twoSum([3,2,4], 6) === [1, 2]

// Time complexity: O(n^2)
// The code contains nested loops, resulting in quadratic time complexity. For each element in the array, the code checks all subsequent elements.

// Space complexity: O(1)
// The code uses a constant amount of space, regardless of the input size. It only returns the indices of the two elements.

function twoSum(numArray, target) {
  let sumIndicies = [];

  for (let firstNum = 0; firstNum < numArray.length; firstNum++) {

    for (let secondNum = firstNum + 1; secondNum < numArray.length; secondNum++) {
      if (numArray[firstNum] + numArray[secondNum] === target) {
        sumIndicies = [firstNum, secondNum]
      }
    }
  }

  return sumIndicies;
}

module.exports = twoSum;
