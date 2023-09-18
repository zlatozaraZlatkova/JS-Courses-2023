/**
 *     2. Odd Occurrences
Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.

 */

function printOddOccurrences(input) {
  let oddWords = {};

  let words = input.split(" ").map((letter) => letter.toLowerCase());

  for (let i = 0; i < words.length; i++) {
    if (!oddWords.hasOwnProperty(words[i])) {
      oddWords[words[i]] = [];
    }
    oddWords[words[i]].push(i);
  }

  let sortedEntries = Object.entries(oddWords).sort(
    (a, b) => a[1][0] - b[1][0]
  );
  let result = "";

  for (let element of sortedEntries) {
    if (element[1].length % 2 !== 0) {
      result += `${element[0]} `;
    }
  }
  console.log(result);
}
printOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
