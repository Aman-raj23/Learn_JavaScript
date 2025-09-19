// var = function-scoped (avoid in modern JS)
var name = "Raj";
console.log(name); // Raj


// let = block-scoped, value can change

let age = 20;
age = 21; // allowed
console.log(age); // 21

// const = block-scoped, value cannot change

const PI = 3.1416;
// PI = 3.14;    // Error (cannot reassign)
console.log(PI); // 3.1416



//==================== var example =========================

var passengerName = "Aman"; // var works inside the whole function
    if (true) {
        var passengerName = "Raj"; // overwrites the same variable
        console.log("Inside block:", passengerName); // Raj
    }
    console.log("Outside block:", passengerName); // Raj (same variable changed!)



//================== let exapmle ===========================

let items = 3;
    if (true) {
        let items = 5;      // new variable only inside this block
        console.log("Items inside block:", items);      // 5
    }
console.log("Items outside block:", items);             // 3



//================== const exapmle ===========================

const accountNumber = "1234-5678";      // fixed, cannot change
    console.log("Account:", accountNumber);

    // accountNumber = "9999-0000";    // Error = can't reassign
    
    const user = { name: "Aman", balance: 5000 };
    user.balance = 6000;        // allowed (object properties can change)
    console.log(user);          // { name: "Aman", balance: 6000 }
