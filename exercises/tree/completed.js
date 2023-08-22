// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // start with an array with the root node
  // take the first el in the node and add its children to the END of the array
  // call the iterator with that node and move on to the next node
  traverseBF(fn) {
    let array = [this.root];

    while(array.length) {
      const node = array.shift();
      array = [...array, ...node.children];
      fn(node);
    }
  }

  // start with an array with the root node
  // take the first el in the node and add its children to the START of the array
  // call the iterator with that node and move on to the next node
  traverseDF(fn) {
    let array = [this.root];

    while(array.length) {
      const node = array.shift();
      array = [...node.children, ...array];
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
