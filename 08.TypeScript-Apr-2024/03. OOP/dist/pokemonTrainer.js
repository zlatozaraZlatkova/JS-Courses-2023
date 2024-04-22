class Pokemon {
    pokemonName;
    pokemonElement;
    pokemonHealth;
    constructor(pokemonName, pokemonElement, pokemonHealth) {
        this.pokemonName = pokemonName;
        this.pokemonElement = pokemonElement;
        this.pokemonHealth = pokemonHealth;
    }
}
class Trainer {
    trainerName;
    trainerBadges = 0;
    pokemonCollection = [];
    constructor(trainerName, pokemon) {
        this.trainerName = trainerName;
        this.pokemonCollection.push(pokemon);
    }
}
const trainerList = [];
function solve(inputData) {
    let commandLine = inputData.shift();
    while (commandLine !== "Tournament") {
        const [trainerName, pokemonName, pokemonElement, pokemonHealth] = commandLine.split(" ");
        const pokemon = new Pokemon(pokemonName, pokemonElement, Number(pokemonHealth));
        const trainer = new Trainer(trainerName, pokemon);
        const getTrainer = trainerList.find((player) => player.trainerName === trainerName);
        if (!getTrainer) {
            trainerList.push(trainer);
        }
        else {
            getTrainer.pokemonCollection.push(pokemon);
        }
        commandLine = inputData.shift();
    }
    const nextPart = inputData.indexOf("Tournament") + 1;
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
    trainerList.sort((playerA, playerB) => playerB.trainerBadges - playerA.trainerBadges || playerB.trainerName.localeCompare(playerA.trainerName));
    trainerList.forEach((trainer) => {
        console.log(`${trainer.trainerName} ${trainer.trainerBadges} ${trainer.pokemonCollection.length}`);
    });
}
function checkPokemonElement(inputElement) {
    trainerList.forEach((player) => {
        const matchEL = player.pokemonCollection.find((pokemon) => pokemon.pokemonElement == inputElement);
        if (!matchEL) {
            player.pokemonCollection.filter((pokemon) => {
                pokemon.pokemonHealth -= 10;
                if (pokemon.pokemonHealth <= 0) {
                    return false;
                }
                return true;
            });
        }
        else {
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
