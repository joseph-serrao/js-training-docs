// 1. For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// 2. For Loop with Array
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log("Array Element:", numbers[i]);
}

// 3. For...of Loop (ES6)
for (let num of numbers) {
    console.log("For...of Loop Element:", num);
}

// 4. forEach Loop
numbers.forEach((num, index) => {
    console.log(`forEach Loop - Index: ${index}, Value: ${num}`);
});

// 5. While Loop
let count = 1;
while (count <= 5) {
    console.log("While Loop Count:", count);
    count++;
}

// 6. Do-While Loop
let index = 1;
do {
    console.log("Do-While Loop Index:", index);
    index++;
} while (index <= 5);

// 7. Loop with Break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Loop interrupted at", i);
        break;
    }
    console.log("Break Example:", i);
}

// 8. Loop with Continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration", i);
        continue;
    }
    console.log("Continue Example:", i);
}
