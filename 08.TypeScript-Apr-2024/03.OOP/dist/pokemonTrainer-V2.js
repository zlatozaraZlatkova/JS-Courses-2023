class Pokemon {
    name;
    element;
    health;
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
    loseHealth() {
        this.health -= 10;
    }
}
class Trainer {
    name;
    numberOfBadges = 0;
    pokemonCollection = [];
    constructor(name) {
        this.name = name;
    }
    addPokemon(pokemon) {
        this.pokemonCollection.push(pokemon);
    }
    addBadge() {
        this.numberOfBadges += 1;
    }
    removePokemon(pokemon) {
        if (pokemon.health <= 0) {
            const pokemonIndex = this.pokemonCollection.indexOf(pokemon);
            this.pokemonCollection.splice(pokemonIndex, 1);
        }
    }
    updatePokemonHealth(element) {
        const elements = this.pokemonCollection.map(pokemon => pokemon.element);
        if (!elements.includes(element)) {
            this.pokemonCollection.forEach(pokemon => pokemon.loseHealth());
            return true;
        }
        return false;
    }
    print() {
        return `${this.name} ${this.numberOfBadges} ${this.pokemonCollection.length}`;
    }
}
function pokemonTrainers(inputData) {
    let commandLine = inputData.shift();
    const trainers = {};
    while (commandLine !== 'Tournament') {
        const [trainerName, pokemonName, element, health] = commandLine.split(' ');
        const pokemon = new Pokemon(pokemonName, element, Number(health));
        if (!trainers.hasOwnProperty(trainerName)) {
            const trainer = new Trainer(trainerName);
            trainers[trainerName] = trainer;
        }
        trainers[trainerName].addPokemon(pokemon);
        commandLine = inputData.shift();
    }
    let endCommand = inputData.shift();
    while (endCommand !== 'End') {
        const element = endCommand;
        Object.keys(trainers)
            .forEach(trainer => {
            if (!trainers[trainer].updatePokemonHealth(element)) {
                trainers[trainer].addBadge();
            }
            trainers[trainer].pokemonCollection.forEach(pokemon => trainers[trainer].removePokemon(pokemon));
        });
        endCommand = inputData.shift();
    }
    Object.values(trainers)
        .sort((a, b) => b.numberOfBadges - a.numberOfBadges)
        .forEach(trainer => console.log(trainer.print()));
}
pokemonTrainers([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10',
    'Tournament', 'Fire',
    'Electricity',
    'End'
]);
console.log('-------');
pokemonTrainers([
    'Sam Blastoise Water 18',
    'Narry Pikachu Electricity 22',
    'John Kadabra Psychic 90',
    'Tournament',
    'Fire',
    'Electricity',
    'Fire',
    'End'
]);
