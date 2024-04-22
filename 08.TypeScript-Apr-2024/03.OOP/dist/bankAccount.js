class BankAccount {
    static _id = 0;
    static _interestRate = 0.02;
    balance = 0;
    id;
    constructor() {
        BankAccount._id++;
        this.id = BankAccount._id;
    }
    static setInterestRate(newRate) {
        BankAccount._interestRate = newRate;
    }
    getInterestRate(years) {
        return this.balance * BankAccount._interestRate * years;
    }
    deposit(number) {
        this.balance += number;
    }
}
class Client {
    allAccounts = {};
    constructor() {
        this.allAccounts;
    }
    create() {
        const clientAccount = new BankAccount();
        this.allAccounts[clientAccount.id] = clientAccount;
        return `Account ID${clientAccount.id} created`;
    }
    deposit(id, amount) {
        if (!this.allAccounts[id]) {
            return `Account does not exist`;
        }
        this.allAccounts[id].deposit(amount);
        return `Deposited ${amount} to ID${this.allAccounts[id].id}`;
    }
    setInterest(interestRate) {
        BankAccount.setInterestRate(interestRate);
        return ``;
    }
    getInterest(id, years) {
        if (!this.allAccounts[id]) {
            return `Account does not exist`;
        }
        else {
            const interest = this.allAccounts[id].getInterestRate(years);
            return `${interest.toFixed(2)}`;
        }
    }
    end() {
        return ``;
    }
}
const testClient = new Client();
console.log(testClient.create());
console.log(testClient.create());
console.log(testClient.deposit(1, 20));
console.log(testClient.deposit(4, 100));
console.log(testClient.deposit(2, 10));
console.log(testClient.setInterest(1.5));
console.log(testClient.getInterest(1, 1));
console.log(testClient.getInterest(2, 1));
console.log(testClient.getInterest(4, 1));
console.log(testClient.end());
