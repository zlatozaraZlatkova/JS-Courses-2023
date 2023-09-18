/**
 *     4. String Substring
The input will be given as two separated strings (a word as a first parameter and a text as a second).
Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
If you don't find the word print: "{word} not found!"

 */
function stringAndSubstring(word, text) {
  let sentence = text.toLowerCase().split(" ");

  if (sentence.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
stringAndSubstring("javascript", "JavaScript is the best programming language");
console.log("---------");
stringAndSubstring("python", "JavaScript is the best programming language");

// VERSION 2
function substring(word, text) {
  let sentence = text.toLowerCase().split(" ");
  let isFound = false;
  for (let currWord of sentence) {
    if (currWord === word) {
      console.log(`${word}`);
      isFound = true;
      break;
    } 
  }
  if (!isFound) {
    console.log(`${word} not found!`);
  }

}
substring("javascript", "JavaScript is the best programming language");
substring("python", "JavaScript is the best programming language");
