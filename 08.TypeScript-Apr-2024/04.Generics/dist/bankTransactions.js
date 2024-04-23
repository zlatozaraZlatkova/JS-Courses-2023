class CreateAccount {
    bankName;
    bankId;
    constructor(bankName, bankId) {
        this.bankName = bankName;
        this.bankId = bankId;
    }
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    expenseType;
    constructor(bankName, bankId, ownerName) {
        super(bankName, bankId);
        this.ownerName = ownerName;
    }
    deposit(depositAmount) {
        this.money += depositAmount;
    }
    expense(expenseAmount, expenseType) {
        if (this.money >= 0) {
            if (!this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] = expenseAmount;
                this.money -= expenseAmount;
            }
            else {
                this.recentTransactions[expenseType] += expenseAmount;
                this.money -= expenseAmount;
            }
        }
        else {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails() {
        let totalSpendAmount = 0;
        Object.values(this.recentTransactions).map((amount) => (totalSpendAmount += amount));
        return `
        Bank name: ${this.bankName}
        Bank ID: ${this.bankId}
        Owner name: ${this.ownerName}
        Money: ${this.money}
        Money spent: ${totalSpendAmount}
        `;
    }
}
let account = new PersonalAccount("DSK", 101240, "Ivan Ivanov");
account.deposit(1000);
account.deposit(1000);
account.expense(700, "Buy new phone");
account.expense(400, "Book a vacation");
account.expense(400, "Book a vacation");
account.expense(100, "Buy food");
console.log(account.showDetails());
console.log("------------------");
let account2 = new PersonalAccount("Fibank", 100000, "Petar Petrol");
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, "Buy a new car");
account2.expense(200, "Go to a fancy restaurant");
account2.expense(100, "Go to a bar");
account2.expense(30, "Go to the movies");
console.log(account2.showDetails());
