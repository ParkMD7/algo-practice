// --- Directions

// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.

// the 'add' method should accept a data arg, create a new node,
// and add it to the children array

// the 'remove' method should accept a data arg and remove any child node with data === data


// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.


// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

// to run tests from the algo-exercises directory: `jest trees/tree/test.js --watch`

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

// THE ONLY DIFFERENCE BETWEEN BREADTH FIRST AND DEPTH FIRST IS WHERE TO ADD THE CHILDREN 
// WHEN ITERATING OVER THE ROOT ARRAY 
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
