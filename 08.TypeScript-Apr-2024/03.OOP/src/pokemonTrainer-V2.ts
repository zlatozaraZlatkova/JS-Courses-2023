class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }

    loseHealth(): void {
        this.health -= 10;
    }
}

class Trainer {
    name: string;
    numberOfBadges: number = 0;
    pokemonCollection: Pokemon[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addPokemon(pokemon: Pokemon): void {
        this.pokemonCollection.push(pokemon);
    }

    addBadge(): void {
        this.numberOfBadges += 1;
    }

    removePokemon(pokemon: Pokemon): void {
        if (pokemon.health <= 0) {
            const pokemonIndex = this.pokemonCollection.indexOf(pokemon);
            this.pokemonCollection.splice(pokemonIndex, 1);
        }
    }

    updatePokemonHealth(element: string): boolean {
        const elements: string[] = this.pokemonCollection.map(pokemon => pokemon.element);
        if (!elements.includes(element)) {
            this.pokemonCollection.forEach(pokemon => pokemon.loseHealth())
            return true;
        }
        return false;
    }

    print(): string {
        return `${this.name} ${this.numberOfBadges} ${this.pokemonCollection.length}`
    }
}


type TrainerStorage = {
    [key: string]: Trainer;
}

function pokemonTrainers(inputData: string[]): void {
    let commandLine: string = inputData.shift();
    const trainers: TrainerStorage = {};

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

        const element: string = endCommand;

        Object.keys(trainers)
            .forEach(trainer => {
                if (!trainers[trainer].updatePokemonHealth(element)) {
                    trainers[trainer].addBadge();
                }
                trainers[trainer].pokemonCollection.forEach(pokemon => trainers[trainer].removePokemon(pokemon));
            })


        endCommand = inputData.shift();
    }

    Object.values(trainers)
        .sort((a, b) => b.numberOfBadges - a.numberOfBadges)
        .forEach(trainer => console.log(trainer.print()))

}



pokemonTrainers([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10',
    'Tournament', 'Fire',
    'Electricity',
    'End'
])

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
])