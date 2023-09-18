/**Write a function that extracts only those numbers that form a non-decreasing subset.
 * In other words, you start from the first element and continue to the end of the given array of numbers. 
 * Any number which is LESS THAN the current biggest one is ignored, 
 * alternatively if it’s equal or higher than the current biggest one
 *  you set it as the current biggest one and you continue to the next number. */

function getSubsequence(arr) {
  let newArr = [];
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    if (currNum >= maxNum) {
      maxNum = currNum;
      newArr.push(maxNum);
    }
  }
  //return newArr
  console.log(newArr);
}
getSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
getSubsequence([1, 2, 3, 4]);
getSubsequence([20, 3, 2, 15, 6, 1]);
getSubsequence([1, 3, 2, 15, 6, 20]);


// VERSION WITH REDUCE()

function extractingSubset(input) {
  let result = input.reduce(reducer, []);

  return result;

  function reducer(arr, num) {
      if (arr.length) {
          if (num >= arr[arr.length - 1]) {
              arr.push(num);
          }

      } else {
          arr.push(num);
      }

      return arr;
  }
}

// VERSION WITH FILTER()
function extractingSubset(input) {
  let biggest = input[0];

  let result = input.filter(x => {
      if (x >= biggest) {
          biggest = x;
          return true;
      } else {
          return false;
      }
  });

  return result;
}