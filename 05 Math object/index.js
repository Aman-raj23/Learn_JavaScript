// Math = offers a range of math libraries, from its built-in Math object to powerful external libraries for more advanced computations.


const num1 = 4.7;
const num2 = -10;
const angleDeg = 90;
const valA = 10;
const valB = 20;
const valC = 5;

console.log("--- Most Used Math Functions (Concise) ---");


// Rounding
console.log(`Math.round(${num1}):`, Math.round(num1));
console.log(`Math.floor(${num1}):`, Math.floor(num1));
console.log(`Math.ceil(${num1}):`, Math.ceil(num1));

// Absolute Value
console.log(`Math.abs(${num2}):`, Math.abs(num2));

// Min/Max
console.log(`Math.max(${valA}, ${valB}, ${valC}):`, Math.max(valA, valB, valC));
console.log(`Math.min(${valA}, ${valB}, ${valC}):`, Math.min(valA, valB, valC));

// Powers and Roots
let base = 2;
let exponent = 3;
console.log(`Math.pow(${base}, ${exponent}):`, Math.pow(base, exponent));
let sqrtNum = 25;
console.log(`Math.sqrt(${sqrtNum}):`, Math.sqrt(sqrtNum));

// Random Number Generation
console.log("Math.random():", Math.random());
// Example: Random integer between 1 and 10
console.log("Random integer (1-10):", Math.floor(Math.random() * 10) + 1);

// Trigonometry (angles in radians)
const angleRad = angleDeg * (Math.PI / 180); // Convert degrees to radians
console.log(`Math.sin(${angleDeg} deg):`, Math.sin(angleRad));
console.log(`Math.cos(${angleDeg} deg):`, Math.cos(angleRad));
