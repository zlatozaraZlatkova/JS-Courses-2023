//Write a function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number.

function convertBinaryToDecimal(n) {
  let binaryNumber = n.toString();
  let decimal = parseInt(binaryNumber, 2);
  
  return decimal;
  
}
convertBinaryToDecimal('00001001')
convertBinaryToDecimal('11110000')