// function CALCULATE(add, x, y) {
//     console.log(`Result:`);
//     add(x, y);
// }

// let add = (x,y) => {
//     let result = x + y;
//     console.log(result);
// }

// let subtract = (x, y) => {
//     let result = (y - x);
//     console.log(result);
// }

// CALCULATE(add, 7, 15);




//----------------------------------------

function CALCULATE(callback, subtract, x, y) {
    console.log(`Result:-`);
    callback(x, y);
    subtract(x ,y);
}

let add = (x,y) => {
    let result = x + y;
    console.log(`Additon: ${result}`);
}

let subtract = (x, y) => {
    let result = (y - x);
    console.log(`Subtraction: ${result}`);
}


CALCULATE(add, subtract, 7, 15);





