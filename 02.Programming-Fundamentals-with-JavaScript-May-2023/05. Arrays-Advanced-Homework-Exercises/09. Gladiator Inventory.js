function gladiatorInventory(strArr) {
  let inventory = strArr[0].split(" ");

  for (let i = 1; i < strArr.length; i++) {
    let [command, equipment] = strArr[i].split(" ");

    switch (command) {
      case "Buy":
        add(equipment);
        break;
      case "Trash":
        del(equipment);
        break;
      case "Repair":
        repair(equipment);
        break;
      case "Upgrade":
        upgrade(equipment);
        break;
    }
  }
  console.log(inventory.join(" "));

  function add(element) {
    if (!inventory.includes(element)) {
      inventory.push(element);
    }
  }

  function del(element) {
    if (inventory.includes(element)) {
      let indexEl = inventory.indexOf(element);
      inventory.splice(indexEl, 1);
    }
  }

  function repair(element) {
    if (inventory.includes(element)) {
      let indexEl = inventory.indexOf(element);
      inventory.splice(indexEl, 1);
      inventory.push(element);
    }
  }

  function upgrade(element) {
    let incomeEl = element.split("-");
    let upgradeEl = incomeEl[0].concat(`:`).concat(incomeEl[1]);

    if (inventory.includes(incomeEl[0])) {
      let incomeElIndex = inventory.indexOf(incomeEl[0]);
      inventory.splice(incomeElIndex + 1, 0, upgradeEl);
    }
  }
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
console.log("-----")
gladiatorInventory([
  "SWORD Shield Spear", 
"Trash Bow",
 "Repair Shield",
  "Upgrade Helmet-V"
]);
