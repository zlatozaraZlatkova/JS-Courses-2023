//Write a function to find all the top integers in an array. 
//A top integer is an integer, which is bigger than all the elements to its right. 


function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    let currentNumber = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      if (currentNumber <= arr[k]) {
        isBigger = false;
      }
    }
    if(isBigger) {
      result.push(arr[i])
    }
  }
  console.log(result.join(" "))
}
solve([41,41,34,20])




