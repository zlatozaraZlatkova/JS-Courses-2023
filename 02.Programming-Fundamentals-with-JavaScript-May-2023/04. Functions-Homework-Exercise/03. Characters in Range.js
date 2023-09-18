/**
 * Write a function that receives two characters and prints on a single line all the characters
 * in between them according to the ASCII code. Keep in mind that the second character code might be
 * before the first one inside the ASCII table.
 *
 */

function charactersInRange(charA, charB) {
  let numFromCharA = convertFromCharToNumber(charA);
  let numFromCharB = convertFromCharToNumber(charB);

  let startIndex = smallestOfTwoNumbers(numFromCharA, numFromCharB);
  let endIndex = biggestOfTwoNumbers(numFromCharA, numFromCharB);
  let buff = "";

  return iterationBetweenTwoNumbers(startIndex, endIndex, buff);

  function iterationBetweenTwoNumbers(start, end, buff) {
    for (let i = start + 1; i < end; i++) {
      buff = concatenationString(buff, convertFromNumberToChar(i));
    }
    return buff;
  }

  function concatenationString(buff, string) {
    buff += string + " ";
    return buff;
  }
  function convertFromNumberToChar(num) {
    return String.fromCharCode(num);
  }
  function convertFromCharToNumber(char) {
    return char.charCodeAt(0);
  }

  function smallestOfTwoNumbers(a, b) {
    return Math.min(a, b);
  }
  function biggestOfTwoNumbers(a, b) {
    return Math.max(a, b);
  }
}
console.log(charactersInRange("a", "d"));
console.log(charactersInRange("C", "#"));
console.log(charactersInRange("#", ":"));
