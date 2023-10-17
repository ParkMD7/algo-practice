import { elements } from "../constants/elements";

export const breakify = (string) => {
  let result = [];

  for (let i = 0; i < string.length; i++) {
    const oneChar = string[i].toUpperCase();
    console.log("oneChar", oneChar);
    const twoChar = `${oneChar}${string[i + 1]}`;
    console.log("twoChar", twoChar);

    // check for case of two chars
    if (elements.includes(twoChar)) {
      result = [
        string.slice(0, i),
        twoChar,
        string.slice(i + 2, string.length),
      ];
      break;
    }

    // check for case of one char
    if (elements.includes(oneChar)) {
      result = [
        string.slice(0, i),
        oneChar,
        string.slice(i + 1, string.length),
      ];
      break;
    }
  }

  if (!result.length) {
    result = [string, "", ""];
  }

  return result;
};
