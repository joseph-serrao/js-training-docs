var a2: number = 10;
let b2: number = 20;
const c2: number = 30;

// 1. FUnction Scope
a = 15;  // allowed
b = 25;  // allowed
// c = 35; // error

function testScope1() {
    var x: string = "I'm var";
    let y: string = "I'm let";
    const z: string = "I'm const";

    console.log(x); // ✅ allowed
    console.log(y); // ✅ allowed
    console.log(z); // ✅ allowed
}

testScope();

// errors
// console.log(x); 
// console.log(y); 
// console.log(z); 

// 2. If/Else Scope
if (true) {
    var v: string = "var inside block";
    let l: string = "let inside block";
    const c_in_block: string = "const inside block";
}

console.log(v); // allowed

// errors
// console.log(l);
// console.log(c_block)\
