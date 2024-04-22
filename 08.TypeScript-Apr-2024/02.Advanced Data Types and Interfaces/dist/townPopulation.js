const input = [
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
];
function getTownData(input) {
    let townList = {};
    input.forEach((town) => {
        let [name, population] = town.split(" <-> ");
        if (!townList.hasOwnProperty(name)) {
            townList[name] = 0;
        }
        townList[name] += Number(population);
    });
    for (let [name, population] of Object.entries(townList)) {
        console.log(`${name}: ${population}`);
    }
}
getTownData(input);
