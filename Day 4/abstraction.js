class BankAccount {
    #balance; 
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn ${amount}. Remaining balance: ${this.#balance}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  
    getBalance() {
      return this.#balance; 
    }
  }
  
  const myAccount = new BankAccount("Alice", 1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getBalance());
  // console.log(myAccount.#balance); 
  