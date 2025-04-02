var a = 10;
let b = 20;
const c = 30;


// 1. FUnction Scope
a = 15;  // allowed
b = 25;  // allowed
c = 35;  // error

function testScope() {
    var x = "I'm var";
    let y = "I'm let";
    const z = "I'm const";
}

console.log(x); // allowed
console.log(y); // error
console.log(z); // allowed

// 2. IfElse scope
if (true) {
    var v = "var inside block";
    let l = "let inside block";
    const c = "const inside block";
} // similar works for loops as well

console.log(v); // allowed
console.log(l); // error
console.log(c); // allowed