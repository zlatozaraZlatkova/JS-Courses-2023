//Write a function that prints whether a given character is upper-case or lower-case.
function lowerToUpper(letter) {
  if (letter >= "A" && letter <= "Z") {
    //console.log(letter. toLowerCase());
    console.log("upper-case");
  } else if (letter >= "a" && letter <= "z") {
    //console.log(letter. toUpperCase());
    console.log("lower-case");
  }
}
lowerToUpper("L");
lowerToUpper("f");
