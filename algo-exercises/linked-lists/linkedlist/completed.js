// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    // return this.head;

    // code reuse
    return this.getAt(0);
  }

  getLast() {
    // let node = this.head;

    // while (node && node.next) {
    //   node = node.next;
    // }

    // return node;


    // code reuse
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    let node = this.head;

    if (node) {
      this.head = node.next;
    }
  }

  removeLast() {
    // if no current head
    if (!this.head) {
      return;
    }

    // if node list length of 1
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = previousNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    // get the last element
    const last = this.getLast();

    if (!last) {
      this.head = new Node(data);
      return;
    }

    last.next = new Node(data);
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    // check for edge case when exited while loop because couldnt find index
    return null;
  }

  removeAt(index) {
    // check for edge case where we have no nodes
    if (!this.head) return;

    // check for edge case where we have only 1 node
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    const currentNode = this.getAt(index);

    // check for edge case where index provided may be outside bounds
    // set previous nodes next to the current codes next
    if (previousNode && currentNode) {
      previousNode.next = currentNode.next
    }
  }

  insertAt(data, index) {
    // handle edge case with empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // handle edge case where index is 0 and we have items in the list
    if (index === 0) {
      this.head = new Node(data, this.head)
      return;
    }

    let previousNode = this.getAt(index - 1);
    let currentNode = this.getAt(index)

    // handle edge case where its out of bounds
    if (!currentNode) {
      this.insertLast(data);
      return;
    }

    if (previousNode && currentNode) {
      const newNode = new Node(data, currentNode)
      previousNode.next = newNode;
    }
  }

  forEach(fn) {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
