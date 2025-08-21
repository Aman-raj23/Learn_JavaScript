let money = [20, 42, 15, 30, 80, 10];

const sum = (accumulator, element) =>           //accumulator = previous value
{                                           //element = next value
    return accumulator + element;
}

let total = money.reduce(sum, 0);
console.log(`$${total}`);


//====================================


let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurance = (acc, fruit) => {                     // function declaration 
     acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}

let count = fruits.reduce(occurance, {});
console.log(count);




let count1 = fruits.reduce((acc, fruit) => {             // function expression
     acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count1);