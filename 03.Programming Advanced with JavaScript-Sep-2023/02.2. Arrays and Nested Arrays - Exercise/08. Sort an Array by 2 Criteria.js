function printSortedArrByTwoCriteria(arr) {
  let sortedArr = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  console.log(sortedArr.join("\n"));
}
printSortedArrByTwoCriteria(["alpha", "beta", "gamma"]);
printSortedArrByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
printSortedArrByTwoCriteria(["test", "Deny", "omen", "Default"]);
