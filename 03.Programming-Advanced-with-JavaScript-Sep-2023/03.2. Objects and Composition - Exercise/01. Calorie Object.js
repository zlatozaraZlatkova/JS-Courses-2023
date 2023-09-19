function calorieObject(arr) {
  let objCalorie = {};
  

  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let calories = Number(arr[i + 1]);

    if (!objCalorie.hasOwnProperty(product)) {
      objCalorie[product] = 0;
    }

    objCalorie[product] += calories;
  }

  console.log(objCalorie);
}
calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
