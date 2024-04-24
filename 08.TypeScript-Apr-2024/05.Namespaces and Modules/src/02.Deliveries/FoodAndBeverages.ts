export namespace FoodAndBeverages {
  export interface Delivery {
    newCustomer(customerName: string, visited: boolean);
    visitCustomer(customerName: string);
    showCustomers(): string;
  }
}
