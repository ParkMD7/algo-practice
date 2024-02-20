// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  // declare two iterators
  let startNode = list.getFirst();
  let startNodePlusN = list.getFirst();

  // move one iterator up N spaces through the list
  for (let i = 0; i < n; i++) {
    startNodePlusN = startNodePlusN.next;
  }

  // loop through the list until it ends
  while (startNodePlusN.next) {
    startNode = startNode.next;
    startNodePlusN = startNodePlusN.next;
  }

  // return the node
  return startNode;
}

module.exports = fromLast;
