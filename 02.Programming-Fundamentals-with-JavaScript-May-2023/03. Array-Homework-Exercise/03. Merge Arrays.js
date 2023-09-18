function mergeElements(firstArr, secondArr) {
  let newArr = [];
  for (let index = 0; index < firstArr.length; index++) {
    if (index % 2 === 0) {
      let sum = Number(firstArr[index]) + Number(secondArr[index]);
      newArr.push(sum);
      
    } else {
      let concatEl = firstArr[index].concat(secondArr[index]);
      newArr.push(concatEl);
    }
  }

  console.log(newArr.join(" - "));
}
mergeElements(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeElements(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])


