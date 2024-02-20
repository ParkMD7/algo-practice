// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// how to run this:
// open directions.html with live server
// add "skip" to all describe blocks to start so that test failures aren't overwhelming
// start tests with "jest linkedlist/test.js  --watch"

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // pass in this.head as a second arg of this.head so we dont overwrite a new head node
    // we want to insert and not overwrite
    const newHeadNode = new Node(data, this.head);
    this.head = newHeadNode;
  }

  size() {
    let counter = 0;
    let node = this.head;


    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!node) return null


    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    const node = this.head;

    if (!node.next) {
      this.head = null;
    } else {
      this.head = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
