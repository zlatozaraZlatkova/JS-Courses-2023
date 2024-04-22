function registerForHeroes(data) {
    //const heroesArr: Array<{name:string, level:number, items:string}> = Array();
    const heroesArr = [];
    for (let line of data) {
        let [name, level, items] = line.split(" / ");
        const hero = {
            name: name,
            level: Number(level),
            items: items,
        };
        heroesArr.push(hero);
    }
    const sortedArr = heroesArr.sort((a, b) => a.level - b.level);
    sortedArr.forEach((hero) => console.log(`Hero: ${hero.name}\n level => ${hero.level}\n items => ${hero.items}`));
}
registerForHeroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
registerForHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
