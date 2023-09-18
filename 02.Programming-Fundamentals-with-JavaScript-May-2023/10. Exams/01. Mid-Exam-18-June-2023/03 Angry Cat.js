function angryCat(arrInput, num, str) {
  let arr = arrInput.slice(0);
  let target = arr;
  let initialIndex = Number(num);
  let action = str;

  let startPoint = target[initialIndex];
  let leftRange = target.slice(0, initialIndex);

  let rightRange = target.slice(initialIndex + 1);

  if (action === "cheap") {
    let leftRangeArrLowerValue = leftRange.filter(
      (element) => element < startPoint
    );
    let rightRangeArrLowerValue = rightRange.filter(
      (element) => element < startPoint
    );

    let sumLeft = 0;
    let sumRight = 0;

    leftRangeArrLowerValue.forEach((x) => (sumLeft += x));
    rightRangeArrLowerValue.forEach((x) => (sumRight += x));

    if (sumLeft > sumRight) {
      let position = "Left";
      console.log(`${position} - ${sumLeft}`);
    } else if (sumLeft === sumRight) {
      let position = "Left";
      console.log(`${position} - ${sumLeft}`);
    } else if (sumLeft < sumRight) {
      let position = "Right";
      console.log(`${position} - ${sumRight}`);
    }
  }

  if (action === "expensive") {
    let leftRangeArrHigherValue = leftRange.filter(
      (element) => element >= startPoint
    );

    let rightRangeArrHigherValue = rightRange.filter(
      (element) => element >= startPoint
    );

    let sumLeft = leftRangeArrHigherValue.reduce(
      (acc, value) => acc + Number(value),
      0
    );
    let sumRight = rightRangeArrHigherValue.reduce(
      (acc, value) => acc + Number(value),
      0
    );

    if (sumLeft < sumRight) {
      let position = "Right";
      console.log(`${position} - ${sumRight}`);
    } else if (sumLeft === sumRight) {
      let position = "Left";
      console.log(`${position} - ${sumRight}`);
    } else if (sumLeft > sumRight) {
      let position = "Left";
      console.log(`${position} - ${sumLeft}`);
    }
  }
}
angryCat([1, 5, 1], 1, "cheap");

angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");

angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
