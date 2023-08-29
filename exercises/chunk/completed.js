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
//   let chunked = [];

//   for (let el of array) {
//     // check for last element in chunked array
//     const lastElementOfChunked = chunked[chunked.length - 1];
//     console.log('lastElementOfChunked', lastElementOfChunked)

//     // if the last element doesnt exist OR its length equals the size of the array then push a new array into chunked
//     if (!lastElementOfChunked || lastElementOfChunked.length === size) {
//       chunked.push([el])
//     } else {
//       lastElementOfChunked.push(el)
//     }
//   }

//   return chunked;
// }

// second solution
function chunk(array, size) {
  let chunked = [];

  array.forEach((el) => {
    // check for last element in chunked array
    const lastElInChunked = chunked[chunked.length - 1];

    // if the last element doesnt exist OR its length equals the size of the array then push a new array into chunked
    if (!lastElInChunked || lastElInChunked.length === size) {
      chunked.push([el]);
    } else {
      lastElInChunked.push(el);
    }
  });

  return chunked;
}

module.exports = chunk;
