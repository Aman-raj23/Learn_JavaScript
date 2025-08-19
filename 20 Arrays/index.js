// let colors = ["Red", "Green", "Blue"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);


// console.log(colors.length);  // Output the length of the array


// //-------------Adding a new element to the array--------

// let colors = ["Red", "Green", "Blue"];

// colors[3] = "Yellow";  // Adding a new element at index 3
// console.log(colors[3]);  // Output the newly added element
// console.log(colors.length);  // Output the updated length of the arra



// //-------------Adding and removing element to the array using inbuilt methods-------- 

// let colors = ["Red", "Green", "Blue"];

// colors.push("yellow");      // push() adds a new element to the end of the array
// colors.pop();               // pop() removes the last element from the array
// colors.unshift("Pink");     // unshift() adds a new element to the beginning of the array
// colors.shift();             // shift() removes the first element from the array

// console.log(colors);        // Output the updated array



// //-------------Iterating through an array using for loop-------- 

let colors = ["Red", "Green", "Blue", "Yellow", "Pink"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);  // Output each element of the array
}

//-------------Iterating through an array using for...of loop------

for (let color of colors) {
    console.log(color);  // Output each element of the array using for...of loop
}

colors.sort();       // sort() sorts the elements of the array in alphabetical order
console.log(colors);  // Output the sorted array


