// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// 3. Arrow Function (ES6)
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 2));

// 4. Arrow Function with Single Parameter
const square = num => num * num;
console.log("Square:", square(6));

// 5. Arrow Function with No Parameters
const sayHello = () => "Hello, World!";
console.log(sayHello());

// 6. Function with Default Parameters
function greetUser(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greetUser());
console.log(greetUser("Bob"));

// 7. Higher-Order Function (Function as Argument)
function operate(a, b, operation) {
    return operation(a, b);
}
console.log("Higher-Order Function Result:", operate(10, 5, add));

// 8. Returning a Function
function multiplier(factor) {
    return num => num * factor;
}
const double = multiplier(2);
console.log("Double:", double(10));
