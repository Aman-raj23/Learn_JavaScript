let numbers = [10, 20, 30];

let result = numbers.map((num, index, arr) => {
    return `Element: ${num}, Index: ${index}, From Array: [${arr}]`;
});

console.log(result);


//================================


let nums = [1, 2, 3, 4, 5];

const cube = (element) => {
    return Math.pow(element, 3);
}

let res = nums.map(cube);
console.log(result);


//=====================================


let students = ["Marco", "Romio", "Don", "Shaka"];

const upperCase = (element) => {
    return (element.toUpperCase());
}


const lowerCase = (elements) => {
    return elements.toLowerCase();
}


let stu = students.map(upperCase);
let stu2 = students.map(lowerCase);
console.log(stu); 
console.log(stu2);


//======================================


