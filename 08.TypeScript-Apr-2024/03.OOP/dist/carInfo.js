class classCar {
    _brand;
    _model;
    _hp;
    constructor(brand, model, hp) {
        this._brand = brand;
        this._model = model;
        this._hp = hp;
    }
    get brand() {
        return this._brand;
    }
    set brand(theBrand) {
        this._brand = theBrand;
    }
    get model() {
        return this._model;
    }
    set model(theModel) {
        this._model = theModel;
    }
    get hp() {
        return this._hp;
    }
    set hp(horsepower) {
        this._hp = horsepower;
    }
    getCarDetails() {
        return `The car is: ${this.brand} ${this.model} - ${this.hp} HP`;
    }
}
function getCarInfoData(inputStr) {
    const [brand, model, hp] = inputStr.split(" ");
    const newCar = new classCar(brand, model, Number(hp));
    console.log(newCar.getCarDetails());
}
const inputStr = "Chevrolet Impala 390";
getCarInfoData(inputStr);
