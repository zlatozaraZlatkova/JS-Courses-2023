import { Drink } from "./Drink";

class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  get getCount(): number {
    return this.drinks.length;
  }

  addDrink(drink: Drink): string {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
    return `Sorry, the machine capacity is full!`;
  }

  removeDrink(name: string): boolean {
    let match = this.drinks.find((el) => el.name === name);
    let index = this.drinks.findIndex((el) => el.name === name);
    if (!match) {
      return false;
    } else {
      this.drinks.splice(index, 1);
      return true;
    }
  }

  getLongest(): string {
    const descending: Drink[] = this.drinks.sort((a, b) => a.volume > b.volume ? -1 : 1);
    const longestDrink: Drink = descending[0];
    return `${longestDrink.toString()}`;
  }
  getCheapest(): string {
    const ascending: Drink[] = this.drinks.sort((a, b) => a.price > b.price ? 1 : -1);
    const cheapestDrink: Drink = ascending[0];
    return `${cheapestDrink.toString()}`;
  }

  buyDrink(name: string): string {
    let match = this.drinks.find((el) => el.name === name);

    if (match) {
      return `${match.toString()}`;
    }
    return `Drink is not available!`;
  }

  report(): string {
    let result = this.drinks.map((c) => c.toString());
    result.unshift(`Drinks available:`);
    return `${result.join("\n")}`;
  }
}

export { VendingMachine };
