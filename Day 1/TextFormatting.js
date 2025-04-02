// 1. Declaring Strings
let singleQuote = 'Hello, this is a string with single quotes';
let doubleQuote = "Hello, this is a string with double quotes";
let backticks = `Hello, this is a string with backticks`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);

// 2. Using Template Literals
let username = "John";
let age = 25;
let message = `My name is ${username} and I am ${age} years old.`;
console.log(message);

// 3. String Concatenation
let str1 = "Hello";
let str2 = "World";
let concatenated = str1 + " " + str2 + "!";
console.log(concatenated);

// 4. String Length
let testString = "JavaScript is awesome!";
console.log("Length of testString:", testString.length);

// 5. Changing Case
console.log(testString.toUpperCase());
console.log(testString.toLowerCase()); 

// 6. Extracting Parts of a String
console.log(testString.slice(0, 10));
console.log(testString.substring(11, 19)); 

// 7. Replacing Text
let newText = testString.replace("awesome", "powerful");
console.log(newText);

// 8. Trimming Whitespace
let paddedText = "   Hello World!   ";
console.log(paddedText.trim());
console.log(paddedText.trimStart()); 
console.log(paddedText.trimEnd()); 

// 9. Splitting and Joining Strings
let sentence = "JavaScript is fun to learn";
let wordsArray = sentence.split(" "); 
console.log(wordsArray);
console.log(wordsArray.join("-"));

// 10. Checking String Content
console.log(testString.includes("JavaScript")); // true
console.log(testString.startsWith("Java")); // true
console.log(testString.endsWith("!")); // true

// 11. Finding Characters or Substrings
console.log(testString.indexOf("is"));
console.log(testString.lastIndexOf("a")); 

// 12. Character Access
console.log(testString.charAt(5)); 
console.log(testString.charCodeAt(5));
console.log(testString[5]);

// 13. Repeat a String
console.log("Repeat ".repeat(3));

// 14. Escaping Characters
let escapedString = "She said, \"JavaScript is great!\"";
console.log(escapedString);

// 15. Using Backticks for Multi-line Strings
let multiLineString = `This is a 
multi-line 
string using template literals.`;
console.log(multiLineString);