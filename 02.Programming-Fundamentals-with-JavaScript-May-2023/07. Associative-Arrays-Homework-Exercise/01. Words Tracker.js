/**
 *     1. Words Tracker
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.

 */

function wordsTracker(input) {
  let givenWords = input.shift().split(" ");
  let duplicatedWords = {};

  givenWords.forEach((word) => {
    duplicatedWords[word] = 0;
  });

  for (let token of input) {
    let word = token;

    if (duplicatedWords.hasOwnProperty(word)) {
      duplicatedWords[word]++;
    }
  }

  let wordsEntries = Object.entries(duplicatedWords).sort(
    (keyA, keyB) => keyB[1] - keyA[1]
  );

  for (let [word, count] of wordsEntries) {
    console.log(`${word} - ${count}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
