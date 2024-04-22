/*
class Pokemon {
  pokemonName: string;
  pokemonElement: string;
  pokemonHealth: number;

  constructor(pokemonName: string, pokemonElement: string, pokemonHealth: number) {
    this.pokemonName = pokemonName;
    this.pokemonElement = pokemonElement;
    this.pokemonHealth = pokemonHealth;
  }
}

class Trainer {
  trainerName: string;
  trainerBadges: number = 0;
  pokemonCollection: Pokemon[] = [];

  constructor(trainerName: string, pokemon: Pokemon) {
    this.trainerName = trainerName;
    this.pokemonCollection.push(pokemon);
  }
}

const trainerList: Trainer[] = [];

function solve(inputData: string[]): void {
  let commandLine = inputData.shift();
  const nextPart = inputData.indexOf("Tournament") + 1;

  while (commandLine !== "Tournament") {
    const [trainerName, pokemonName, pokemonElement, pokemonHealth] = commandLine.split(" ");

    const pokemon = new Pokemon(pokemonName, pokemonElement, Number(pokemonHealth));
    const trainer = new Trainer(trainerName, pokemon);

    const getTrainer = trainerList.find((player: Trainer) => player.trainerName === trainerName);

    if (!getTrainer) {
      trainerList.push(trainer);
    } else {
      getTrainer.pokemonCollection.push(pokemon);
    }

    commandLine = inputData.shift();
  }


  for (let i = nextPart; i < inputData.length; i++) {
    let commandLine = inputData[i];

    if (commandLine === "End") {
      break;
    }

    switch (commandLine) {
      case "Fire":
        checkPokemonElement(commandLine);
        break;

      case "Water":
        checkPokemonElement(commandLine);
        break;

      case "Electricity":
        checkPokemonElement(commandLine);
        break;
    }
  }

  trainerList.sort((playerA: Trainer, playerB: Trainer) => playerB.trainerBadges - playerA.trainerBadges || playerB.trainerName.localeCompare(playerA.trainerName));
  
  trainerList.forEach((trainer: Trainer) => {
    console.log(`${trainer.trainerName} ${trainer.trainerBadges} ${trainer.pokemonCollection.length}`);
  });
}

function checkPokemonElement(inputElement: string) {
  trainerList.forEach((player: Trainer) => {
    const matchEL = player.pokemonCollection.find(
      (pokemon: Pokemon) => pokemon.pokemonElement == inputElement
    );

    if (!matchEL) {
      player.pokemonCollection.filter((pokemon: Pokemon) => {
        pokemon.pokemonHealth -= 10;
        if (pokemon.pokemonHealth <= 0) {
          return false;
        }
        return true;
      });
    } else {
      player.trainerBadges++;
    }
  });
}

solve([
  "Peter Charizard Fire 100",
  "George Squirtle Water 38",
  "Peter Pikachu Electricity 10",
  "Tournament",
  "Fire",
  "Electricity",
  "End",
]);
*/ 
