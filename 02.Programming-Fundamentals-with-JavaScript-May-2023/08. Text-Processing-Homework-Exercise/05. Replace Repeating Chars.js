/**
 *     5. Replace Repeating Chars
Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.

 */

// VERSION 1
function printReplaceChars(input) {
  let result = input[0] //a

  for (let i = 1; i < input.length; i++) {
    let current = input[i];
    let previous =  input[i - 1];

    if (current !== previous) {
      result += current;
    }
   
  }
  console.log(result);

  
}
printReplaceChars("aaaaabbbbbcdddeeeedssaa");
console.log("----------")
printReplaceChars("qqqwerqwecccwd");
console.log("----------")


// VERSION 2

function printCharDuplicates(string) {
  let myObj = {};
  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (myObj.hasOwnProperty(character)) {
      myObj[character]++;
    } else {
      myObj[character] = 1;
    }
  }
  let entriesObj = Object.entries(myObj);

  let result = "";

  for (let [key, value] of entriesObj) {
    result = result + key;
  }

  console.log(result);
}
printCharDuplicates("aaaaabbbbbcdddeeeedssaa");
console.log("----------")
printCharDuplicates("qqqwerqwecccwd");


