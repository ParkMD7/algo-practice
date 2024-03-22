const reversedList = require('./index');
const L = require('./linkedlist');
const LinkedList = L.LinkedList;

test('reversedList is a function', () => {
  expect(typeof reversedList).toEqual('function');
});

  test('when the list has 2 elements', () => {
    const l = new LinkedList();
    l.insertLast(1);
    l.insertLast(2);
    expect(reversedList(l)).toEqual([2, 1]);
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.insertLast(5);
    expect(reversedList(l)).toEqual([5, 4, 3, 2, 1]);
  });

  test('when the list has 0 elements', () => {
    const l = new LinkedList();
    expect(reversedList(l)).toEqual([]);
  });
