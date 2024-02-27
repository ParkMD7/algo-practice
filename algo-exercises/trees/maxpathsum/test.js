const TreeNode = require("./treeNode");
const maxPathSum = require("./index");

test("maxPathSum function exists", () => {
  expect(maxPathSum).toBeDefined();
});

test("Returns the max if it exists", () => {
  const root = new TreeNode(
    -10,
    new TreeNode(9, null, null),
    new TreeNode(
      20,
      new TreeNode(15, null, null),
      new TreeNode(7, null, null)
    )
  );

  expect(maxPathSum(root)).toEqual(42);
});

test("Returns the max if it exists with a smaller node", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
  );
  expect(maxPathSum(root)).toEqual(6);
});
