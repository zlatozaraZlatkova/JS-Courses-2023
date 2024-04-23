interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> extends Dealership<T> {
    sellCar: (dealerId: T, model: T) => void;
}

class CarDealer<T> implements Actions<T> {
    modelsSold: Map<T, T> = new Map();
    soldCars: number = 0;

    constructor(public dealershipName: T) {
        this.dealershipName = dealershipName;
    }

    sellCar(dealerId: T, model: T): void {
        this.modelsSold.set(dealerId, model);
        this.soldCars++;
    }

    showDetails(): string {
        let result = `${this.dealershipName}:`;
        this.modelsSold.forEach((model, id) => {
            result += `\n${id} sold ${model}`;
        });

        return result;
    }
}

let dealership = new CarDealer("SilverStar");

dealership.sellCar("BG01", "C Class");
dealership.sellCar("BG02", "S Class");
dealership.sellCar("BG03", "ML Class");
dealership.sellCar("BG04", "CLK Class");
console.log(dealership.showDetails());