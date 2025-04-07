// 1. Creating an Object
const person = {
    name: "Alice",
    age: 25,
    city: "New York",
    
    // Method to display person details
    displayInfo: function() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}.`);
    },

    // Method to update age
    updateAge: function(newAge) {
        this.age = newAge;
        console.log(`Age updated to ${this.age}.`);
    }
};

// 2. Accessing Properties
console.log("Name:", person.name);
console.log("Age:", person.age);

// 3. Calling Methods
person.displayInfo();
person.updateAge(30);
person.displayInfo();

// 4. Adding a New Property
person.country = "USA";
console.log("Updated Object:", person);

// 5. Deleting a Property
delete person.city;
console.log("After Deletion:", person);
