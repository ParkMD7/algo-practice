const firstPalindrome = require("./index");

test("firstPalindrome function is defined", () => {
  expect(typeof firstPalindrome).toEqual("function");
});

test('"aba" is the firstPalindrome', () => {
  expect(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])).toEqual(
    "ada"
  );
});

test('"racecar" is the firstPalindrome', () => {
  expect(firstPalindrome(["notapalindrome", "racecar"])).toEqual("racecar");
});

test("it returns an empty string if there is no palindrome", () => {
  expect(firstPalindrome(["def", "ghi"])).toEqual("");
});
