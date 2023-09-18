function solve(input) {
  let armies = {};

  for (let line of input) {
    if (line.includes("arrives")) {
      let tokens = line.split("arrives");
      let general = tokens[0].trim();

      if (!armies.hasOwnProperty(general)) {
        armies[general] = {};
      }
    } else if (line.includes(":")) {
      let tokens = line.split(",");
      let armyCount = Number(tokens.pop());
      let [general, armyName] = tokens[0].split(": ");

      if (armies.hasOwnProperty(general)) {
        if (!armies[general][armyName]) {
          armies[general][armyName] = 0;
        }
        armies[general][armyName] += armyCount;
      }
    } else if (line.includes("+")) {
      let tokens = line.split(" + ");
      let [armyName, armyCount] = tokens;
      armyCount = Number(armyCount);

      for (let general in armies) {
        if (armies[general].hasOwnProperty(armyName)) {
          armies[general][armyName] += armyCount;
        }
      }
    } else if (line.includes("defeated")) {
      let tokens = line.split(" defeated");
      let general = tokens[0];

      if (armies.hasOwnProperty(general)) {
        delete armies[general];
      }
    }
  }

  let sortedGenerals = Object.entries(armies).sort(sortingArmies);


  for (const [general, armyName] of sortedGenerals) {
    let sumOfArmyOfLeader = (obj) =>
      Object.values(armyName).reduce((a, b) => a + b);

    console.log(`${general}: ${sumOfArmyOfLeader(general)}`);

    let sortedArmies = Object.entries(armyName).sort((a, b) => b[1] - a[1]);
    for (const army of sortedArmies) {
      console.log(`>>> ${army[0]} - ${army[1]}`);
    }
  }

  function sortingArmies(a, b) {
    let [aArmyName, aArmyCount] = a;
    let [bArmyName, bArmyCount] = b;
    let sumArmyCountA = (obj) =>
      Object.values(aArmyCount).reduce((a, b) => a + b);

    let sumArmyCountB = (obj) =>
      Object.values(bArmyCount).reduce((a, b) => a + b);

    let result = sumArmyCountB(bArmyCount) - sumArmyCountA(aArmyCount);
    if (result === 0) {
      return aArmyName.localeCompare(bArmyName);
    }
    return result;
  }
}
solve([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);
