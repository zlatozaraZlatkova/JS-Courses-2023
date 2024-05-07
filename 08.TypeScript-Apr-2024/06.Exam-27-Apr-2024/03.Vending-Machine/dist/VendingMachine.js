"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
        return `Sorry, the machine capacity is full!`;
    }
    removeDrink(name) {
        let match = this.drinks.find((el) => el.name === name);
        let index = this.drinks.findIndex((el) => el.name === name);
        if (!match) {
            return false;
        }
        else {
            this.drinks.splice(index, 1);
            return true;
        }
    }
    getLongest() {
        const descending = this.drinks.sort((a, b) => a.volume > b.volume ? -1 : 1);
        const longestDrink = descending[0];
        return `${longestDrink.toString()}`;
    }
    getCheapest() {
        const ascending = this.drinks.sort((a, b) => a.price > b.price ? 1 : -1);
        const cheapestDrink = ascending[0];
        return `${cheapestDrink.toString()}`;
    }
    buyDrink(name) {
        let match = this.drinks.find((el) => el.name === name);
        if (match) {
            return `${match.toString()}`;
        }
    }
    report() {
        let result = this.drinks.map((c) => c.toString());
        result.unshift(`Drinks available:`);
        return `${result.join("\n")}`;
    }
}
exports.VendingMachine = VendingMachine;
