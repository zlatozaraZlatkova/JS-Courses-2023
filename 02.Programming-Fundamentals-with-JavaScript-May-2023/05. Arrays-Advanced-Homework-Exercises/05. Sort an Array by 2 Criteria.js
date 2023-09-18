function sort(arr) {
  let sortArr = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(sortArr.join("\n"));
}
sort(["alpha", "beta", "gamma"]);
sort(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
