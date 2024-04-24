"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courier = void 0;
class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        const matchCustomer = this.placesToVisit.find((person) => person.customerName === customerName);
        if (matchCustomer) {
            throw new Error(`${Object.keys(matchCustomer)[0]} is already a customer of yours!`);
        }
        else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        const matchCustomer = this.placesToVisit.find((person) => person.customerName === customerName);
        if (matchCustomer) {
            matchCustomer.visited = true;
        }
        else {
            throw new Error(`${Object.keys(matchCustomer)[0]}  is not your customer.`);
        }
    }
    showCustomers() {
        let result = "";
        this.placesToVisit.forEach((customer) => {
            result += `${customer.customerName} -> ${customer.visited}\n`;
        });
        return result.trim();
    }
}
exports.Courier = Courier;
