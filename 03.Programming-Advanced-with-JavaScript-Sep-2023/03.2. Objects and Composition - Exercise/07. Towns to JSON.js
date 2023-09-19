function makeJSON(input) {
  const towns = [];
  for (let i = 1; i < input.length; i++) {
    const line = input[i].split(/\s*\|\s*/g);
    let name = line[1];
    let lat = Number(line[2]).toFixed(2);
    let long = Number(line[3]).toFixed(2);
    const townData = {
      Town: name,
      Latitude: +lat,
      Longitude: +long,
    };
    towns.push(townData);
  }
  console.log(JSON.stringify(towns));
}
makeJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

console.log("------");

makeJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);

//VERSION 2

function makeJSON(arr) {
  const townData = [];

  for (let i = 1; i < arr.length; i++) {
    const data = arr[i];
    let [town, lat, long] = data
      .split('|')
      .filter(x => x)
      .map(x => x.trim());

    lat = Number(lat).toFixed(2);
    long = Number(long).toFixed(2);

    townData.push(factory(town, lat, long));
  }

  console.log(JSON.stringify(townData));

  function factory(town, lat, long) {
    return {
      Town: town,
      Latitude: Number(lat),
      Longitude: Number(long),
    }
  }
}

makeJSON(['| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |']);
makeJSON(['| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |']);