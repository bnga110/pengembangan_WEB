console.log("=== Arithmetic Operators ===");
let a = 10;
let b = 3;
console.log("a + b =", a + b); 
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a & b);
console.log("a ** b =", a ** b);

a++;
console.log("a++ ", a);

b--;
console.log("b-- =", b);

console.log("\n=== Assignment Operator ===");
let x = 5; 
x += 3;
console.log("x += 3 ->", x);

x -= 2;
console.log("x -= 2 ->", x); 

x *= 2;
console.log("x *= 2 ->", x);

x /= 3;
console.log("x /= 3 ->", x);

x %= 3;
console.log("x %= 3 ->", x);

x **= 3;
console.log("x **= 3 ->", x);

console.log("\n=== Comparison Operators ===");

let p = 5;
let q = "5";

console.log("p == q ->", p == q);
console.log("p === q ->", p === q);
console.log("p != q ->", p != q);
console.log("p !== q ->", p !== q);
console.log("p > 3 ->", p > 3);
console.log("p < 3 ->", p < 3);
console.log("p >= 5 ->",p >= 5);
console.log("p <= 4 ->", p <= 4);

console.log("\n=== String Operator ===");
let text1 = "Hello";
let text2 = "World";

let result = text1 + " " + text2;
console.log("text1 + text2 ->", result);

result += "!";
console.log("result += '!' ->", result);

console.log("\n=== Logical Operators ===");
let m = 7;
let n = 10;

console.log("m > 5 && n < 12 ->", m > 5 && n <12);
console.log("m > 8 || n < 12 ->", m > 8 || n < 12);
console.log("!(m == 7) ->", !(m == 7));

console.log("\n=== Type Operators ===");
console.log("Typeof 123 ->" , typeof "hallo");
console.log("Typeof true ->", typeof true);

let date = new Date();
console.log ("date instanceof Date->", typeof Date);
console.log ("date instanceof Object ->", date instanceof Object);

console.log("\n=== ternary Operator ===");
let age = 18;
let status = (age >= 18)
console.log(' umur $ {age} tahum -> $ {status}');

age = 15;
status = (age >= 18) ? "dewasa" : "belum dewasa";
console.log('umur 4 {age} tahum -> 4 {status}');

