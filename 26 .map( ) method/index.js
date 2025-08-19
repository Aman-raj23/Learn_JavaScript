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

let stu = students.map(upperCase);
console.log(stu); 

