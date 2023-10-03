// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slowIterator = list.getFirst();
  let fastIterator = list.getFirst();

  // loop through the list one time
  // during the loop increment the slow iterator 1x and the fast iterator 2x
  // after the loop ends then the slow iterator will be the midpoint
  while(fastIterator.next && fastIterator.next.next) {
    slowIterator = slowIterator.next;
    fastIterator = fastIterator.next.next;
  }

  return slowIterator;
}

module.exports = midpoint;
