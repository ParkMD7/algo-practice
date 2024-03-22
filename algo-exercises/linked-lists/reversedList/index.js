// --- Directions
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// --- Example
//   const l = new LinkedList();
//   l.insertLast(1)
//   l.insertLast(2)
//   l.insertLast(3)
//   l.insertLast(4)
//   l.insertLast(5)
//   reversedList(l); // returns [5, 4, 3, 2, 1]

const L = require('./linkedlist');
const LinkedList = L.LinkedList;

function reversedList(list) {
  const revList = new LinkedList();
  
  console.log('revList before loop', revList)
  for (let el of list) {
    console.log('el', el)
    revList.insertAt(el, 0);
  }

  console.log('revList after loop', revList)

  return revList;
}

module.exports = reversedList;
