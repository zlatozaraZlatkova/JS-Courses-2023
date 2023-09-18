/**
 * Write a function that finds the longest sequence of equal elements in an array of numbers.
 * If several longest sequences exist, print the leftmost one.
 */

function maxSequenceOfEqualElements(arr) {
  let arrLength = arr.length;
  let maxSequence = [];
  let separator = " ";

  for (let i = 0; i < arrLength; i++) {
    let currentIndex = arr[i];

    let currentSequence = [];

    for (let j = i; j < arrLength; j++) {
      let currentElement = arr[j];

      if (currentIndex === currentElement) {
        currentSequence.push(currentElement);
      } else {
        break;
      }
    }
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }

  console.log(maxSequence.join(separator));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3]);
