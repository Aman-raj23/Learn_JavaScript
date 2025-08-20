let money = [20, 42, 15, 30, 80, 10];

const sum = (accumulator, element) =>           //accumulator = previous value
{                                           //element = next value
    return accumulator + element;
}

let total = money.reduce(sum, 0);
console.log(`$${total}`);


//====================================


let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurance = (acc, fruit) => {
     acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}

let count = fruits.reduce(occurance, {});
console.log(count);


// gvvdzhhgc d
