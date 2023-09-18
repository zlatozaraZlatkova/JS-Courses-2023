function solve(arr) {
  // add elements with installed games at account in new array

  let installedGames = arr[0].split(" ");
  let account = [];

  for (el of installedGames) {
    account.push(el);
  }

  // read input array data
  for (let i = 1; i < arr.length; i++) {
    let currentEl = arr[i].split(" "); //"Install LoL"
    let command = currentEl[0]; // "Install, LoL"
    let game = currentEl[1]; //"Install"

    if (command === "Play") {
      break;
    }

    if (command === "Install") {
      //add the game at the last position in the account,
      // but only if it isn't installed already
      if (!account.includes(game)) {
        account.push(game);
      }
    } else if (command === "Uninstall") {
      //delete the game if it exists.
      if (account.includes(game)) {
        let gameIndex = account.indexOf(game);
        account.splice(gameIndex, 1);
      }
    } else if (command === "Update") {
      //update the game if it exists
      // and place it in the last position.

      if (account.includes(game)) {
        let gameIndex = account.indexOf(game);
        account.splice(gameIndex, 1);
        account.push(game);
      }
    } else if (command === "Expansion") {
      //check if the game exists and insert after it the expansion
      // in the following format: "{game}:{expansion}";
      let originalGame = game.split("-")[0];

      if (account.includes(originalGame)) {
        let expansionGame = game.split("-")[0] + ":" + game.split("-")[1];
        let gameIndex = account.indexOf(originalGame);
        account.splice(gameIndex + 1, 0, expansionGame);
      }
    } else {
      account.push(game);
    }
  }
  console.log(account.join(" "));
}
solve([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
solve([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);

//FUNCTIONS

function gameAccount(arr) {
  let listOfGames = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(" ");
    let command = tokens[0];
    let game = tokens[1];

    if (command === "Play!") {
      break;
    }

    switch (command) {
      case "Install":
        add(game);
        break;
      case "Uninstall":
        remove(game);
        break;
      case "Update":
        update(game);
        break;
      case "Expansion":
        expansion(game);
        break;
    }
  }

  function add(element) {
    if (!listOfGames.includes(element)) {
      listOfGames.push(element);
    }
  }

  function remove(element) {
    if (listOfGames.includes(element)) {
      let indexEl = listOfGames.indexOf(element);
      listOfGames.splice(indexEl, 1);
    }
  }

  function update(element) {
    if (listOfGames.includes(element)) {
      // check if element exist in arr
      let indexEl = listOfGames.indexOf(element); // find index
      listOfGames.splice(indexEl, 1); // del index
      listOfGames.push(element); // add element to the end
    }
  }
  function expansion(element) {
    let incomeElement = element.split("-")[0];

    if (listOfGames.includes(incomeElement)) {
      let expansionElement = incomeElement
        .concat(":")
        .concat(element.split("-")[1]);
      let indexEl = listOfGames.indexOf(incomeElement);
      listOfGames.splice(indexEl + 1, 0, expansionElement);
    }
  }

  console.log(listOfGames.join(" "));
}
gameAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
gameAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
