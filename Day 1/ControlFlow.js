// 1. Basic if-else
let number = 10;
if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is not positive.");
}

// 2. if-else chain
let score = 15;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 3. Nested if-else
let isMember = true;
let purchaseAmount = 150;
if (isMember) {
    if (purchaseAmount > 100) {
        console.log("You get a 20% discount!");
    } else {
        console.log("You get a 10% discount!");
    }
} else {
    console.log("No discount available.");
}

// 4. Ternary Operator
let age = 18;
let message = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(message);

// 5. Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 6. Switch with Multiple Cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
    case "grape":
        console.log("This is a fruit.");
        break;
    default:
        console.log("Unknown item.");
}
