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
  let first = list.getFirst();
  let firstPlusN = list.getFirst();
  let counter = 0;

  // move one iterator up N spaces through the list
  while (counter < n && firstPlusN.next) {
    counter++
    firstPlusN = firstPlusN.next;
  }

  // loop through the list until it ends
  while (firstPlusN.next) {
    first = first.next
    firstPlusN = firstPlusN.next;
  }

  console.log('counter', counter)
  console.log('first', first)
  console.log('firstPlusN', firstPlusN)

  // return the node
  return first;
}

module.exports = fromLast;
