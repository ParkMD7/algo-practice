// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // first check - check if incoming data is LESS than root node && that root node already has
    // a value to the left
    if (data < this.data && this.left) {
      this.left.insert(data);
    }

    // second check - check if incoming data is LESS than root node && that root node has no left node
    else if (data < this.data) {
      this.left = new Node(data);
    }

    // third check - check if incoming data is GREATER than root node && that root node already has
    // a value to the right
    else if (data > this.data && this.right) {
      this.right.insert(data);
    }

    // final check - check if incoming data is GREATER than root node && that root node has no right node
    else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this; // return the entire node
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    }

    else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
