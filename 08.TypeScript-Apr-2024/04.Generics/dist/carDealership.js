class CarDealer {
    dealershipName;
    modelsSold = new Map();
    soldCars = 0;
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.dealershipName = dealershipName;
    }
    sellCar(dealerId, model) {
        this.modelsSold.set(dealerId, model);
        this.soldCars++;
    }
    showDetails() {
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
