//Write a program that reverses a string and prints it on the console.

function reverseLengthOfString(word) {
  let reverseWord = "";

  for (i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  console.log(reverseWord);
}
reverseLengthOfString("Hello");
reverseLengthOfString("SoftUni");
reverseLengthOfString("12345");
