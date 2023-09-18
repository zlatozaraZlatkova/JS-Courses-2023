function suppliesForSchool(input) {
  let packagePens = Number(input[0]) * 5.8;
  let packageMarker = Number(input[1]) * 7.2;
  let boardCleaner = Number(input[2]) *1.2;
  let discount = Number(input[3]) / 100 * (packagePens + packageMarker + boardCleaner);
  let totalCost = (packagePens + packageMarker + boardCleaner) - discount;
  console.log(totalCost);

}
suppliesForSchool(["4", "2", "5", "13"]);