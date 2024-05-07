type CollectTaxesType = () => number;
type TownFunctionType = (key: number) => number;

interface TownProps {
  townName: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: CollectTaxesType;
  applyGrowth: TownFunctionType;
  applyRecession: TownFunctionType;
}

function cityTaxes(townName: string, population: number, treasury: number): TownProps {
  const town: TownProps = {
    townName,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function (): number {
      return (this.treasury += Math.floor(this.population * this.taxRate));
    },
    applyGrowth: function (percentage: number): number {
      return (this.population = Math.floor(this.population + (this.population * percentage) / 100));
    },
    applyRecession: function (percentage: number): number {
      return (this.treasury -= Math.floor(this.treasury * percentage) / 100);
    },
  };

  return town;
}

const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
