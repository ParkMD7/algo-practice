// --- Directions
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// --- Examples
// missingNumber([3,0,1]) === 2
// missingNumber([9,6,4,2,3,5,7,0,1]) === 8


// Time complexity: O(n), where n is the length of the input array. We iterate through the array once to calculate the sum of the array elements.

// Space complexity: O(1). We use a constant amount of extra space for storing variables regardless of the input size.

function missingNumber(numArray) {
  let missingNum;

  for (let i = 0; i <= numArray.length; i++) {
    if (!numArray.includes(i)) {
      missingNum = i;
    }
  }

  return missingNum
}

module.exports = missingNumber;
