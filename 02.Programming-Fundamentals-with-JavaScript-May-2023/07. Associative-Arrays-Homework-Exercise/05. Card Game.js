/**
 *     5. Card Game
You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}

 */
function cardGame(data) {
  let players = new Map();

  for (let line of data) {
    let tokens = line.split(": ");
    let name = tokens.shift();
    let cardsArr = tokens[0].split(", ");

    if (!players.has(name)) {
      players.set(name, new Set());
    }
    for (let card of cardsArr) {
      players.get(name).add(card);
    }
  }

  let enumCardPower = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let enumCardType = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  for (let [key, value] of players) {
    let sum = 0;
    for (let card of value) {
      let cardInfo = card.split("");
      let cardType = cardInfo.pop();
      let cardPower = cardInfo.join("");

      let cardPowerAsNumber = enumCardPower[cardPower];
      let cardTypeAsNumber = enumCardType[cardType];
      sum += cardPowerAsNumber * cardTypeAsNumber;
    }
    console.log(`${key}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);


// Version with objects

function cardGame(input) {
  // * initialize power multipliers
  let suits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  let faces = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  // create collection
  let players = {};

  // for every element of input
  for (let line of input) {
    //- parse element
    //-- split by ": " -> name and cards as string
    //-- split cards string by ", " -> array of cards

    let [name, cards] = line.split(": ");
    cards = cards.split(", ");

    //- store in collection
    //-- if person is not recorded, create new set
    //-- add new cards to person set

    if (players.hasOwnProperty(name) === false) {
      players[name] = new Set();
    }

    for (let card of cards) {
      players[name].add(card);
    }
  }

  let playersEntries = Object.entries(players);

  // for every element(entry) in result collection
  for (let [name, cards] of playersEntries) {
    let sumOfPower = 0;

    //- for every card in entry
    //-- calculate power
    for (let card of cards) {
      let facePower = faces[card[0]];
      let suitPower = suits[card[card.length - 1]];
      // alternative:  let colorPower = power[card.slice(-1)];

      sumOfPower += facePower * suitPower;
    }
    //- print name and total power
    console.log(`${name}: ${sumOfPower}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
