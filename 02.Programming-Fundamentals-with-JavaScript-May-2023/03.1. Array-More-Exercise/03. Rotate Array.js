/**
 * Write a function that rotates an array. The array should be rotated to the right side,
 * meaning that the last element should become the first, upon rotation.
 * The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
 * The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.
 */
function rotateArray(arr) {
  // let rotations = +arr[arr.length - 1];
  let rotations = arr.pop()

  for (let i = 1; i <= rotations; i++) {
    let current = arr.pop();
    arr.unshift(current);

  }
  console.log(arr.join(" "));
}
rotateArray(["a", "b", "c", "d", "e", 1]);
rotateArray(["1", "2", "3", "4", "2"]);

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])


