//version 1
function distinctArray(arr) {
  let inputArr = arr;
  let separator = " ";
  let newArr = [...new Set(inputArr)];

  console.log(newArr.join(separator));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4, 2, 3, 4, 8, 9, 6, 5, 0]);

//version 2
function distinctArray(input) {
  let uniqArr = [];

  for (let element of input) {
    // if(!uniqArr.includes(element))
    if (uniqArr.indexOf(element) === -1) {
      uniqArr.push(element);
    }
  }
  console.log(uniqArr.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4, 2, 3, 4, 8, 9, 6, 5, 0]);

//version 3
function distinctArray(arr) {
  let removeDuplicates = arr.filter(
    (value, index) => arr.indexOf(value) === index
  );
  console.log(removeDuplicates.join(" "));
  //return input.filter((item, index) => input.indexOf(item) === index)
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4, 2, 3, 4, 8, 9, 6, 5, 0]);
