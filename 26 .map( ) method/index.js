let numbers = [1, 2, 3, 4, 5];

const cube = (element) => {
    return Math.pow(element, 3);
}

let result = numbers.map(cube);
console.log(result);

