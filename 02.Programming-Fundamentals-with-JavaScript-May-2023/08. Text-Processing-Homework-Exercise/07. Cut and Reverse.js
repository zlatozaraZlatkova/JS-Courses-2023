/**
 *     7. Cut and Reverse
The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
 */
function cutAndReverse(input) {
  let partOne = input.slice(0, input.length / 2);
  let partTwo = input.slice(input.length / 2, input.length);

  let firstWord = partOne.split("").reverse().join("");
  let secondWord = partTwo.split("").reverse().join("");
  
  console.log(firstWord);
  console.log(secondWord);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')