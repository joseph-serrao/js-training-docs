// 1. Push 
let numbers = [1, 2, 3];
numbers.push(4);
console.log("After push:", numbers);

// 2. Pop
numbers.pop();
console.log("After pop:", numbers);

// 3. Slice
let slicedNumbers = numbers.slice(0, 2);
console.log("Slice result:", slicedNumbers);

// 4. Splice 
numbers.splice(1, 1, 99); // Removes 1 element at index 1 and adds 99
console.log("After splice:", numbers);

// 5. Map 
let doubled = numbers.map(num => num * 2);
console.log("After map (doubled values):", doubled);

// 6. Filter 
let filtered = numbers.filter(num => num > 2);
console.log("After filter (values > 2):", filtered);

// 7. Reduce
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("After reduce (sum of values):", sum);