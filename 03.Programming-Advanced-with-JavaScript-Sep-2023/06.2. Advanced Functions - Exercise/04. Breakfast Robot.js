function solution() {
  const recipesLibrary = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const commandParser = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(input) {
    const [command, ...tokens] = input.split(" ");
    return commandParser[command](...tokens);
  }

  function restock(microelement, quantity) {
    store[microelement] += Number(quantity);
    return "Success";
  }

  function prepare(recipe, quantity) {
    let prepareRecipe = {};
    quantity = Number(quantity);

    for (let [el, value] of Object.entries(recipesLibrary[recipe])) {
      let needQuantity = value * quantity;
      if (store[el] < needQuantity) {
        return `Error: not enough ${el} in stock`;
      }
      prepareRecipe[el] = needQuantity;
    }

    for (let [element, value] of Object.entries(prepareRecipe)) {
      store[element] -= value;
    }
    return "Success";
  }

  function report() {
    return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
  }
}

// let manager = solution ();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

// console.log("------")

// let manager2 = solution ();
// console.log(manager2("prepare turkey 1")); // Success
// console.log(manager2("restock protein 10")); // Error: not enough carbohydrate in stock
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock carbohydrate 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock fat 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("restock flavour 10"));
// console.log(manager2("prepare turkey 1"));
// console.log(manager2("report"));
