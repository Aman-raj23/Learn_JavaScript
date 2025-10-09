function sum(...numbers) { // all arguments packed into 'numbers' array
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);


function intro(firstName, lastName, ...hobbies) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

intro("Aman", "Raj", "Reading", "Coding", "Traveling");




let person = (firstName, lastName, ...hobbies) => {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}
person("Aman", "Kumar", "Reading", "Coding", "Traveling");
