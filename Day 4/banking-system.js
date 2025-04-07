
class BankAccount {
    #balance; 
  
    constructor(accountNumber, ownerName, initialBalance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.#balance = initialBalance;
    }
  
    // Public method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`${this.ownerName} deposited $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    // Public method to withdraw money
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`${this.ownerName} withdrew $${amount}. Remaining balance: $${this.#balance}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, ownerName, initialBalance, interestRate) {
      super(accountNumber, ownerName, initialBalance);
      this.interestRate = interestRate;
    }
  
    applyInterest() {
      const interest = this.getBalance() * (this.interestRate / 100);
      this.deposit(interest);
      console.log(`Interest of $${interest} applied to ${this.ownerName}'s account.`);
    }
  }
  
  class CurrentAccount extends BankAccount {
    constructor(accountNumber, ownerName, initialBalance, overdraftLimit) {
      super(accountNumber, ownerName, initialBalance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount > 0 && (this.getBalance() + this.overdraftLimit) >= amount) {
        const newBalance = this.getBalance() - amount;
        if (newBalance < 0) {
          console.log(`${this.ownerName} used overdraft. New balance: $${newBalance}`);
        } else {
          console.log(`${this.ownerName} withdrew $${amount}. Remaining balance: $${newBalance}`);
        }
      } else {
        console.log("Withdrawal exceeds overdraft limit.");
      }
    }
  }
  
  const aliceSavings = new SavingsAccount("SA123", "Alice", 5000, 5);
  const bobCurrent = new CurrentAccount("CA456", "Bob", 2000, 1000);
  
  console.log("\n--- Transactions ---");
  aliceSavings.deposit(1000); // Deposit in savings account
  aliceSavings.applyInterest(); // Apply interest
  aliceSavings.withdraw(2000); // Withdraw from savings
  
  console.log("\n--- Current Account Transactions ---");
  bobCurrent.withdraw(2500); // Overdraft should be used
  bobCurrent.deposit(500); // Deposit money
  bobCurrent.withdraw(5000); // Exceeds overdraft limit
  
