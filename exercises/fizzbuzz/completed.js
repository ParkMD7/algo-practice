// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const divisibleByThree = i % 3 === 0;
    const divisibleByFive = i % 5 === 0;
    const divisibleByFifteen = i % 15 === 0;

    if (divisibleByFifteen) {
      console.log("fizzbuzz");
    } else if (divisibleByFive) {
      console.log("buzz");
    } else if (divisibleByThree) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
