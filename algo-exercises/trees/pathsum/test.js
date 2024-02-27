const TreeNode = require("./treeNode");
const hasPathSum = require("./index");

test("hasPathSum function exists", () => {
  expect(hasPathSum).toBeDefined();
});

test("Returns true if the tree has a path sum", () => {
  const root = new TreeNode(
    5,
    new TreeNode(
      4,
      new TreeNode(
        11,
        new TreeNode(7, null, null),
        new TreeNode(2, null, null)
      ),
      null
    ),
    new TreeNode(
      8,
      new TreeNode(13, null, null),
      new TreeNode(4, null, new TreeNode(1, null, null))
    )
  );

  expect(hasPathSum(root, 22)).toEqual(true);
});

test("Returns false if the tree does not have a path sum", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, null, null),
    new TreeNode(3, null, null)
  );
  expect(hasPathSum(root, 5)).toEqual(false);
});
