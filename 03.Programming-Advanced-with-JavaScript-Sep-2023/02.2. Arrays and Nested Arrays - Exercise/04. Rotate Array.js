function rotateArray(arr, rotation) {
  for (let i = 0; i < rotation; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);


// Version 2

function rotateArray(arr, rotation) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  rotation %= arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, rotation - 1);
  reverse(arr, rotation, arr.length - 1);

  console.log(`${arr.join(" ")}`);
}
rotateArray(["1", "2", "3", "4"], 2); 
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
