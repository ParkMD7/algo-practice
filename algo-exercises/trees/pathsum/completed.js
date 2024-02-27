/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Time complexity: O(n^2)
// The code contains nested loops, resulting in quadratic time complexity.
// For each element in the array, the code checks all subsequent elements.

// Space complexity: O(n)
// We use a constant amount of extra space for storing variables regardless of the input size.

function hasPathSum(root, targetSum) {
  if (!root) return false;

  // create the stack data structure
  let stack = [];

  // set my root node value equal to the difference of the target sum less the current roots value
  // gives me a value to work back from
  root.val = targetSum - root.val;
  stack.push(root);

  // create a while loop - if there is a node on the stack then do something
  while (stack.length) {
    // remove the first node off the stack
    let node = stack.pop();

    // check for a left side node
    // set the value of the left hand node equal to the difference of the parent minus the left value
    // then add it back to the stack
    if (node.left) {
      node.left.val = node.val - node.left.val;
      stack.push(node.left);
    }

     // check for a right side node
     // set the value of the right hand node equal to the difference of the parent minus the right value
     // then add it back to the stack
    if (node.right) {
      node.right.val = node.val - node.right.val;
      stack.push(node.right);
    }

    // case where i'd want to return true
    // if both left and right equal each other (aka they are null) meaning i've hit the bottom of the tree
    // && value equals 0 (aka we have a path sum)
    if (node.left === node.right && !node.val) {
      return true;
    }
  }
  return false;
}

module.exports = hasPathSum;
