function getNegativeOrPositiveNum(arr) {
  let newArr = [];
  for (let element of arr) {
    if (element < 0) {
      newArr.unshift(element);
    } else if (element >= 0) {
      newArr.push(element);
    }
  }
  console.log(newArr);
}
getNegativeOrPositiveNum([7, -2, 8, 9]);
getNegativeOrPositiveNum([3, -2, 0, -1]);
