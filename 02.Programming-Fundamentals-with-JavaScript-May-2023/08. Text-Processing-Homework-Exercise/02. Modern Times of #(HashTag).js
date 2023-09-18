/**
 * The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed. 
Finally, print out all the special words you found without the label (#) on a new line.
 */

function solve(input) {
  let textArr = input.split(" ").filter((word) => word.startsWith("#"));

  textArr.forEach((word) => {
    if (word.length > 1 && word[0] === "#") {
      // cut first digit
      let cutFirstEl = word.substr(1);

      // check if a string contains only letters
      let onlyLetters = /^[a-zA-Z]*$/.test(cutFirstEl);

      //print result
      if (onlyLetters === true) {
        console.log(cutFirstEl);
      }
    }
  });
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
console.log("------------");
solve("Nowadays everyone uses # to tag a #special word in #social$Media");
console.log("------------");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);

// version 2
function findHashTag(str) {
  let text = str.split(" ");

  for (let word of text) {
    if (word[0] === "#" && word.length > 1) {
      let wordsArr = word.split("");
      wordsArr.shift();
      let wordToPrint = "";

      for (let char of wordsArr) {
        if (!isNaN(char)) {
          wordToPrint = "";
          break;
        } else {
          wordToPrint += char;
        }
      }

      if (wordToPrint.length > 0) {
        console.log(wordToPrint);
      }
    }
  }
}
findHashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
findHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
