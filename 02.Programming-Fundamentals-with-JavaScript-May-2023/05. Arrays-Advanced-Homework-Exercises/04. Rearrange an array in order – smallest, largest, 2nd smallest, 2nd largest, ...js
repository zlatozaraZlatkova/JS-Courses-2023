function sortedArr(arr) {
  arr.sort((a, b) => a - b);

  let sorted = [];
  while (arr.length !== 0) {
    sorted.push(arr.pop());
    sorted.push(arr.shift());
  }

  console.log(sorted.join(" "));
}
sortedArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortedArr([34, 2, 3, 32, 6, 32, 7, 19, 47]);

//version 2
function sortedArr(arr) {
  let finalArr = arr.slice();
  let sortArr = finalArr.sort((a, b) => b - a);
  let newArr = [];

  for (let i = finalArr.length - 1; i >= finalArr.length / 2; i--) {
    newArr.push(sortArr.shift());
    newArr.push(sortArr.pop());
  }
  console.log(newArr.join(" "));
}
sortedArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortedArr([34, 2, 3, 32, 6, 32, 7, 19, 47]);

//version 3

function sortedArr(arr) {
  let descendingSortArr = arr.sort((a, b) => b - a);
  let arrL = arr.length;
  let newArr = [];

  for (let i = 0; i < arrL / 2; i++) {
    let maxNum = descendingSortArr.shift();
    let minNum = descendingSortArr.pop();

    newArr.push(maxNum);
    newArr.push(minNum);
  }
  console.log(newArr.join(" "));
}
sortedArr([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sortedArr([34, 2, 3, 32, 6, 32, 7, 19, 47]);
