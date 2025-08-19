let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(numbers); // This will not work as expected because Math.max expects individual numbers, not an array
let max = Math.max(...numbers); // Using the spread operator to pass the array elements as individual arguments 
console.log(maximum);
console.log(max);




let myName = "Aman Raj";
let letters = [...myName]; // Using the spread operator to convert a string into an array of characters
let letters1 = [...myName].join("~"); // Using the spread operator to convert a string into an array of characters and then joining them with a tilde
console.log(letters);
console.log(letters1);


let fruits = ["Apple", "Banana", "Cherry"];
let vegetables = ["Carrot", "Broccoli", "Spinach"];
let food = [...fruits, ...vegetables]; // Using the spread operator to combine two
let newfood = [...fruits, ...vegetables, "Potato", "Tomato"]; // Adding more items to the combined array
console.log(food); // Combining two arrays into one using the spread operator
console.log(newfood); // Adding more items to the combined array using the spread operator