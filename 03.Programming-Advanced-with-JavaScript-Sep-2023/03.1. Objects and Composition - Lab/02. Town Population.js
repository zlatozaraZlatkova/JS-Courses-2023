function getTownPopulation(data) {
  let towns = {};
  for (let tokens of data) {
    let [name, population] = tokens.split(" <-> ");
    if (!towns.hasOwnProperty(name)) {
      towns[name] = Number(population);
    } else {
      towns[name] += Number(population);
    }
  }

  let townsEntries = Object.entries(towns);
  for (let [town, population] of townsEntries) {
    console.log(`${town} : ${population}`);
  }
}
getTownPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("------")
getTownPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
