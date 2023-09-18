function getOddPosition(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      let num = arr[i] * 2;
      newArr.push(num);
    }
  }
  return newArr.reverse().join(" ");
}

console.log(getOddPosition([10, 15, 20, 25]));
console.log(getOddPosition([3, 0, 10, 4, 7, 3]));