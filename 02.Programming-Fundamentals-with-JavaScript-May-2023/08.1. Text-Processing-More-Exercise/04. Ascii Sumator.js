/**
 *     4. Ascii Sumator
Write a function that prints a sum of all characters between two given characters (their ASCII code).
 On the first line, you will get a character. On the second line, you get another character.
 On the last line, you get a random string. Find all the characters between the two given and print their ASCII sum.

 */

function solve(input) {
  let startIndex = input.shift().charCodeAt(0);
  let endIndex = input.shift().charCodeAt(0);
  let inputStr = input.shift().split("");

  let sum = 0;

  if (startIndex > endIndex) {
    inputStr = inputStr.filter(
      (letter) =>
        letter.charCodeAt(0) > endIndex && letter.charCodeAt(0) < startIndex
    );
  } else {
    inputStr = inputStr.filter(
      (letter) =>
        letter.charCodeAt(0) > startIndex && letter.charCodeAt(0) < endIndex
    );
  }

  for (let char of inputStr) {
    char = char.charCodeAt();

    sum += char;
  }

  console.log(sum);
}
solve([".", "@", "dsg12gr5653feee5"]);
console.log("------");
solve(["?", "E", "@ABCEF"]);
console.log("------");
solve(["a", "1", "jfe392$#@j24ui9ne#@$"]);
