let numbers = [1, 2, 3, 4, 5 ,6];

const isOdd= (element) =>{
    return element % 2 !== 0;
}

let result = numbers.filter(isOdd);
console.log(result);


//===============================

let marks = [33, 45, 73, 27, 30, 90];

const passed = (element) => {
    return element > 32 ;
}

const failed = (element) => {
    return element < 33;
}

let passedStu = marks.filter(passed);
console.log(passedStu);
console.log(passedStu.length);

let failedStud = marks.filter(failed);
console.log(failedStud);



//==============================

let ages = [12, 17, 18, 25, 14, 30];

let adults = ages.filter(age => age >= 18);

console.log(adults);
