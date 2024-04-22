class classCar {
  private _brand: string;
  private _model: string;
  private _hp: number;

  constructor(brand: string, model: string, hp: number) {
    this._brand = brand;
    this._model = model;
    this._hp = hp;
  }

  get brand() {
    return this._brand;
  }
  set brand(theBrand: string) {
    this._brand = theBrand;
  }

  get model() {
    return this._model;
  }
  set model(theModel: string) {
    this._model = theModel;
  }

  get hp() {
    return this._hp;
  }
  
  set hp(horsepower: number) {
    this._hp = horsepower;
  }

  public getCarDetails(): string {
    return `The car is: ${this.brand} ${this.model} - ${this.hp} HP`;
  }
}

function getCarInfoData(inputStr: string): void {
  const [brand, model, hp] = inputStr.split(" ");

  const newCar = new classCar(brand, model, Number(hp));
  console.log(newCar.getCarDetails());
}
const inputStr: string = "Chevrolet Impala 390";
getCarInfoData(inputStr);
