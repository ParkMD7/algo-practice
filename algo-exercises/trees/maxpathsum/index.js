// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
// A node can only appear in the sequence at most once.
// Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// to run tests from the algo-exercises directory: `jest pathsum/test.js --watch`

function maxPathSum(root) {
  // create smallest max val
  let max = -Infinity;

  // set up framework for a depth-first search recursive fn
  const findSums = (node) => {
		// Base case / hit a null
		if (!node) return 0;

		let left = findSums(node.left);
		let right = findSums(node.right);
		let allSum = left + right + node.val;
		let leftNodeSum = left + node.val;
		let rightNodeSum = right + node.val;

		// Max is all possible combinations
		max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);
		
		// Return the MAX path, which can be node.val, left + node.val, or right + node.val
		return Math.max(leftNodeSum, rightNodeSum, node.val);
	};

	findSums(root);

	return max;

}

module.exports = maxPathSum;
