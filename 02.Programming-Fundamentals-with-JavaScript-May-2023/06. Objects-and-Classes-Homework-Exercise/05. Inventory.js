function solve(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let currentEl = input[i].split(" / ");
    let name = currentEl[0];
    let level = Number(currentEl[1]);
    let items = currentEl[2];

    let hero = {
      name: name,
      level: level,
      items: items,
    };
    result.push(hero);
  }

  result.sort((heroesA, heroesB) => heroesA.level - heroesB.level);

  result.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
