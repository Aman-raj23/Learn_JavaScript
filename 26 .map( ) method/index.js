let numbers = [1, 2, 3, 4, 5];

const cube = (element) => {
    return Math.pow(element, 3);
}

let result = numbers.map(cube);
console.log(result);


//=====================================


let students = ["Marco", "Romio", "Don", "Shaka"];

const upperCase = (element) => {
    return (element.toUpperCase());
}


const lowerCase = (elements) => {
    return (elements.toLowerCase());
}


let stu = students.map(upperCase);
let stu2 = students.map(lowerCase);
console.log(stu); 
console.log(stu2);


//======================================


// let fruits = [""]

