/**
 *     1. Value of a String
Write a function, which finds the sum of the ASCII codes of the letters in a given string.  Your tasks will be a bit harder because you will have to find the sum of either the lowercase or the uppercase letters.
On the first line, you will receive the string.
On the second line, you will receive one of two possible inputs:
    • If you receive "UPPERCASE"  find the sum of all uppercase English letters in the previously received string
    • If you receive "LOWERCASE"  find the sum of all lowercase English letters in the previously received string
You should not sum the ASCII codes of any characters, which are not letters.
At the end print the sum in the following format:
    • The total sum is: {sum}

 */
function valueOfString(input) {
  
  let text = input[0]
    .split("")
    .filter(
      (x) =>
        (x.charCodeAt(x) >= 65 && x.charCodeAt(x) <= 90) ||
        (x.charCodeAt(x) >= 97 && x.charCodeAt(x) <= 122)
    );
  
  let command = input[1];
  let sum = 0;

  if (command === "UPPERCASE") {
    text = text.filter(
      (letter) =>
        letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90
    );
    
    
    for (let char of text) {
      char = char.charCodeAt(0);
      sum += char;
    }
  }

  if (command === "LOWERCASE") {
    text = text.filter(
      (letter) =>
        letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122
    ); 
    

    for (let char of text) {
      char = char.charCodeAt(0);
      sum += char;
    }
  }

  console.log(`The total sum is: ${sum}`);
}
valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
valueOfString(["AC/DC", "UPPERCASE", ""]);
