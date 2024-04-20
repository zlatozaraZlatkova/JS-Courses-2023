
class BankAccount {
  private static _id: number = 0;
  private static _interestRate: number = 0.02;
  private balance: number = 0;

  id: number;
  
  constructor() {
    BankAccount._id++;
    this.id = BankAccount._id;
    
  }

  static setInterestRate(newRate: number): void {
    BankAccount._interestRate = newRate;
  
  }

  getInterestRate(years: number): number {
    return this.balance * BankAccount._interestRate * years;
    
  }

  deposit(number: number): void {
    this.balance += number;
  }
}

class Client {
  allAccounts: object  = {};

  constructor() {
    this.allAccounts;
  }

  create() {
    const clientAccount = new BankAccount();
    this.allAccounts[clientAccount.id] = clientAccount;

    return `Account ID${clientAccount.id} created`;
  }

  deposit(id: number, amount: number): string{
    if (!this.allAccounts[id]) {
      return `Account does not exist`;
    }

    this.allAccounts[id].deposit(amount);
   
    return `Deposited ${amount} to ID${this.allAccounts[id].id}`;
  }

  setInterest(interestRate: number): string {
    BankAccount.setInterestRate(interestRate);
    return ``;
  }

  getInterest(id: number, years: number): string {
    
    if (!this.allAccounts[id]) {
      return `Account does not exist`;

    } else {
        const interest = this.allAccounts[id].getInterestRate(years);
    
        return `${interest.toFixed(2)}`;
    }

  }
  end(): string {
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



