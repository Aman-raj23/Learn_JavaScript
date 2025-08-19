//  A basic introduction of function


function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    // if (y === 0) {
    //     return "Cannot divide by zero";
    // }
    // return x / y;   
    return y === 0 ? "Cannot divide by zero" : x / y;
}

function happyBirthday(username, age) {
    console.log(`Happy Birthday ${username}! You are now ${age} years old.`);
}

let a = add(10, 5);
console.log(a);

console.log(subtract(10, 5));
console.log(divide(10, 5));
console.log(divide(10, 0));
// console.log(happyBirthday("Raj", 20));
console.log(happyBirthday("Raj", 20));


//-----------------------OR-------------------


let modulo = function(x, y) { return x % y; } 

let moduloRes = modulo(17, 3);
console.log(moduloRes);


let car = function(Brand, Model) {return {Brand, Model};}
console.log(car("Toyota", "Corolla"));
// console.log(car1);