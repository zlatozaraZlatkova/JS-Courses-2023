import { FoodAndBeverages } from "./FoodAndBeverages";

interface PlaceToVisitType {
  customerName: string;
  visited: boolean;
}

export class Courier implements FoodAndBeverages.Delivery {
  protected placesToVisit: PlaceToVisitType[];

  constructor(placesToVisit: PlaceToVisitType[]) {
    this.placesToVisit = placesToVisit;
  }

  newCustomer(customerName: string, visited: boolean = false) {
    const matchCustomer = this.placesToVisit.find((person: PlaceToVisitType) => person.customerName === customerName);

    if (matchCustomer) {
      throw new Error(`${Object.keys(matchCustomer)[0]} is already a customer of yours!`);
    } else {
      this.placesToVisit.push({ customerName, visited });
      return `${customerName} just became your client.`;
    }
  }

  visitCustomer(customerName: string) {
    const matchCustomer = this.placesToVisit.find((person: PlaceToVisitType) => person.customerName === customerName);

    if (matchCustomer) {
      matchCustomer.visited = true;
    } else {
      throw new Error(`${Object.keys(matchCustomer)[0]}  is not your customer.`);
    }
  }

  showCustomers(): string {
    let result: string = "";
    this.placesToVisit.forEach((customer) => {
      result += `${customer.customerName} -> ${customer.visited}\n`;
    });

    return result.trim();
  }
}
