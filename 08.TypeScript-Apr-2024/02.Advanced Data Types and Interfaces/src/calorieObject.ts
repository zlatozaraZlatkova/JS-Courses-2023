function getCalories(inputArr: string[]): void {
  class Food {
    public name: string;
    public calories: number;

    constructor(name: string, calories: number) {
      this.name = name;
      this.calories = calories;
    }
  }

  //object[] is the same as Array<object>
  const arr: object[] = [];

  for (let i = 0; i < inputArr.length; i += 2) {
    let foodName: string = inputArr[i];
    let foodCalories: number = Number(inputArr[i + 1]);

    arr.push(new Food(foodName, foodCalories));
  }

  console.log(arr);
}
getCalories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);


// version 2

function getCaloriesObj(arr: string[]): void {
  interface Product {
    product:string,
    calories: number
  }
  let objCalorie = {} as Product;

  for (let i = 0; i < arr.length; i += 2) {
    let product: string = arr[i];
    let calories: number = Number(arr[i + 1]);

    if (!objCalorie.hasOwnProperty(product)) {
      objCalorie[product] = 0;
    }

    objCalorie[product] += calories;
  }

  console.log(objCalorie);
}

getCaloriesObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
getCaloriesObj(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
