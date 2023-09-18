function addAndSubtract(arr) {
  let oldSum = 0;
  let newSum = 0;
  for (let index = 0; index < arr.length; index++) {
    let currDigit = arr[index];
    oldSum += currDigit;

    if (currDigit % 2 === 0) {
      currDigit += index;
    } else {
      currDigit -= index;
    }
    arr[index] = currDigit;
    newSum += currDigit;
  }
  console.log(arr);
  console.log(`${oldSum}\n${newSum}`);


}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2]);

