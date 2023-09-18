
function equalSums(arr) {
  let foundIndex = 'no';
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // leftSum
    for (let left = 0; left < i; left++) {
      let currentLeftNum = arr[left];
      leftSum += currentLeftNum;
    }
    // rightSum
    for (let right = i + 1; right < arrLength; right++) {
      let currentRightNum = arr[right];
      rightSum += currentRightNum;
    }

    if(leftSum === rightSum) {
      foundIndex = i; 
    } 

  }

  console.log(foundIndex);
  
}
// equalSums([1, 2, 3, 3]);
// equalSums([1])
// equalSums([1, 2]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])


