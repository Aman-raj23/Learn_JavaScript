//========== e.g-1(Swap two values) =============

let a =5;
let b =4;

[a, b] = [b, a];

console.log(a);
console.log(b);



// =============== e.g-2 (SWAP TWO ELEMENTS IN ARRAY)=============

let colors = ["blue", "red", "green", "black", "pink"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);



// =============== e.g-3 (ASSIGN ELEMENTS OF ARRAY IN VARIABLES)=============


let colors1 = ["blue", "red", "green", "black", "pink"];

[c1, c2, c3, ...extraColors] = colors1;

console.log(c1);
console.log(c2);
console.log(c3);
console.log(extraColors);



// =============== e.g-4 (EXTRACT VALUES FROM OBJECTS)=============

const person1 = { 
    name: "Walter", 
    age: 20, 
    city: "Delhi" 
};

const person2 = {
    name: "Heisenbegr",
    age: 40,
    city: "U.S.A"
};

const {name:name1, age: age1, city: city1} = person1;
console.log(name1);
console.log(age1);
console.log(city1);

const {name: name2, age: age2, city2="India"} = person2;
console.log(name2);
console.log(age2);
console.log(city2);



// =============== e.g-5 (DISTRUCTURING IN FUCNTION PARAMETERS)=============

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

let user = { 
    name: "RAJ", 
    age: 21, 
    city: "Delhi" 
};

printUser(user); // Name: Aman, Age: 21
