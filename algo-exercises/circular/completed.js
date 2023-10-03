// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slowIterator = list.getFirst();
  let fastIterator = list.getFirst();

  console.log('slowIterator', slowIterator)
  console.log('fastIterator', fastIterator)

  while (fastIterator.next && fastIterator.next.next) {
    slowIterator = slowIterator.next;
    fastIterator = fastIterator.next.next;

    if (slowIterator === fastIterator) return true;
  }

  return false;
}

module.exports = circular;
