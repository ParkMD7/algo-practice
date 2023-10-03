const lookNsee = require('./index');

test('function lookNsee exists', () => {
  expect(typeof lookNsee).toEqual('function');
});

test('lookNsee returns the correct response for a single input', () => {
  const answer = lookNsee("1");

  expect(answer).toEqual("11");
});

test('lookNsee returns the correct response for a single input with multiple digits', () => {
  const answer = lookNsee("111221");

  expect(answer).toEqual("312211");
});

test('lookNsee returns the correct response for a single input with a lot of digits', () => {
  const answer = lookNsee("31131211131221");

  expect(answer).toEqual("13211311123113112211");
});
