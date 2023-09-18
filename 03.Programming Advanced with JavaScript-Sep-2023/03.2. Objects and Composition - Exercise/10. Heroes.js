function heroes() {
  return {
    fighter(nameOfHero) {
      const state = {
        name: nameOfHero,
        health: 100,
        stamina: 100
      };

      state.fight = (stamina) => {
        state.stamina--;
        console.log(`${state.name} slashes at the foe!`);
      };

      return state;
    },
    mage(nameOfHero) {
      const state = {
        name: nameOfHero,
        health: 100,
        mana: 100,
      };

      state.cast = (spell) => {
        state.mana--;
        console.log(`${state.name} cast ${spell}`);
      }

      return state;
    }
  };
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);