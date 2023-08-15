// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// one solution
// function chunk(array, size) {
//   let finalArray = [];
//   let chunk = [];

//   array.forEach((num, idx) => {
//     console.log('num & chunk length', num, "&", chunk.length)
//     // if chunk is equal to size
//     // add chunk to final array and reset chunk with new num
//     if (chunk.length === size) {
//       finalArray = [...finalArray, chunk];
//       chunk = [num];
//     } 
//     // if chunk is less than size
//     // add num to chunk
//     else if (chunk.length < size) {
//       chunk = [...chunk, num];
//     }
    
//     // final index
//     // for the last index in the array make sure you add the remaining chunk
//     if (idx === array.length - 1) {
//       finalArray = [...finalArray, chunk];
//     }
//   });

//   return finalArray;
// }

// second solution
function chunk(array, size) {
  let chunked = [];

  for (let el of array) {
    // check for last element in chunked array
    const lastElementOfChunked = chunked[chunked.length - 1];
    console.log('lastElementOfChunked', lastElementOfChunked)

    // if the last element doesnt exist OR its length equals the size of the array then push a new array into chunked
    if (!lastElementOfChunked || lastElementOfChunked.length === size) {
      chunked.push([el])
    } else {
      lastElementOfChunked.push(el)
    }
  }

  return chunked;
}

module.exports = chunk;
