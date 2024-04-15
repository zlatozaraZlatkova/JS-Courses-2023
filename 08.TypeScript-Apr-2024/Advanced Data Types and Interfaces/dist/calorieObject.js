function getCalories(inputArr) {
    class Food {
        name;
        calories;
        constructor(name, calories) {
            this.name = name;
            this.calories = calories;
        }
    }
    //object[] is the same as Array<object>
    const arr = [];
    for (let i = 0; i < inputArr.length; i += 2) {
        let foodName = inputArr[i];
        let foodCalories = Number(inputArr[i + 1]);
        arr.push(new Food(foodName, foodCalories));
    }
    console.log(arr);
}
getCalories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// version 2
function getCaloriesObj(arr) {
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
getCaloriesObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
getCaloriesObj(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
