function heroRecruitment(data) {
  let heroes = {};

  let commandParser = {
    Enroll: (heroes, heroName) => {
      if (!heroes.hasOwnProperty(heroName)) {
        heroes[heroName] = [];
      } else {
        console.log(`${heroName} is already enrolled.`);
      }
      return heroes;
    },
    Learn: (heroes, heroName, spell) => {
      if (heroes.hasOwnProperty(heroName)) {
        if (heroes[heroName].includes(spell)) {
          console.log(`${heroName} has already learnt ${spell}.`);
        } else {
          heroes[heroName].push(spell);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
      return heroes;
    },
    Unlearn: (heroes, heroName, spell) => {
      if (heroes.hasOwnProperty(heroName)) {
        if (heroes[heroName].includes(spell)) {
          heroes[heroName].splice(heroes[heroName].indexOf(spell), 1);
        } else {
          console.log(`${heroName} doesn't know ${spell}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
      return heroes;
    },
  };

  for (let line of data) {
    if (line === "End") {
      break;
    }
    let [command, ...tokens] = line.split(" ");
    heroes = commandParser[command](heroes, ...tokens);
  }

  console.log("Heroes:");

  let entries = Object.entries(heroes);

  entries.forEach(([heroName, data]) => {
    console.log(`== ${heroName}: ${data === [] ? "" : data.join(", ")}`);
  });
}

heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
console.log("------");
heroRecruitment([
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End",
]);
console.log("------");
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
