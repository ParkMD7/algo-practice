// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// create two arrays:
// one with the count for each level that we will eventually return
// one to hold all of the elements AND a keyword to watch for to let us know when each level is done
function levelWidth(root) {
  let treeWidth = [0];
  let tree = [root, "stop"];

  // prevent infinite loops - if just 'stop' is left then dont go in the loop
  while (tree.length > 1) {
    // take the first element of the array
    const child = tree.shift();

    // if its the stop element then add it to the end of the array and add a new counter
    if (child === "stop") {
      treeWidth = [...treeWidth, 0];
      tree = [...tree, child];
      // otherwise increment the counter and add the children to the back
    } else {
      treeWidth[treeWidth.length - 1] += 1;
      tree = [...tree, ...child.children];
    }
  }

  return treeWidth;
}

module.exports = levelWidth;
