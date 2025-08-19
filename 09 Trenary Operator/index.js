// ternary operator = a shortcut to if{) and else{} statements
//                  = helps to assign a variable based on a condition
//                  = condition? codeIfTrue codeIfFalse;

//----------------------------------------------------------------------


let age = 12;
let message = age >= 18 ? "You're an adult": "You're a minor";
document.write(message);


let time = 9;
let greeting = time < 12 ? "Good morning!": "Good afternoon!";
document.write(greeting);


let isStudent = false;
let text = isStudent? "You are a student" : "You are NOT a student";
document.write(message);


let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
document.write(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);