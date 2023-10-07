//Write a program that keeps a number inside its context and returns a new function that adds a given number to the previous one.
function add(partialAppliedNum) {
  return function(num) {
    return partialAppliedNum + num;
  }
}
let add5 = add(5);
console.log(add5(2));
console.log(add5(3));