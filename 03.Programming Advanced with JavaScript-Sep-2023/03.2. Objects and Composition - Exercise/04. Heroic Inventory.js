function getInventory(arr) {
  let heroesRegister = [];

  for (let line of arr) {
    let [name, level, items] = line.split(" / ");
    level = Number(level);
    if (items === undefined) {
      items = [];
    } else {
      items = items.split(", ");
    }

    let currentHero = {
      name: name,
      level: level,
      items: items,
    };

    heroesRegister.push(currentHero);
  }

  console.log(JSON.stringify(heroesRegister));
}
getInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
console.log("-------");
getInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
console.log("-------");
getInventory(["Jake / 1000"]);
