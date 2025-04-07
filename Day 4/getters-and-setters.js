class BankAccount {
    #balance;
  
    constructor(accountNumber, ownerName, initialBalance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.#balance = initialBalance;
    }
  
    // Getter 
    get balance() {
      return this.#balance;
    }
  
    // Setter 
    set balance(amount) {
      if (amount >= 0) {
        this.#balance = amount;
      } else {
        console.log("Error: Balance cannot be negative.");
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`${this.ownerName} deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount; 
        console.log(`${this.ownerName} withdrew $${amount}. Remaining balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  }
  
  const account = new BankAccount("001", "John Doe", 1000);
  
  console.log(`Initial Balance: $${account.balance}`);
  
  account.deposit(500);
  account.withdraw(300);
  
  account.balance = -500;
  
  account.balance = 2000;
  console.log(`Updated Balance: $${account.balance}`);
  