//===============e.g-1 =================

let person1 = {
  name: "Raj",
  age: 21,
  hobbies: ["cricket", "movies", "vidGames", "music"],
  address: {
    city: "Jalandhar",
    state: "Punjab",
    pin: 110001
  }

};

console.log(person1.name); 
console.log(person1.hobbies);        
console.log(person1.address.city);   // you have to use property accesser twice
console.log(person1.address.pin); 



//===================================

let person2 = {
  name: "Sam",
  age: 21,
  hobbies: ["cricket", "movies"],
  address: {
    city: "Jalandhar",
    state: "Punjab",
    pin: 110001
  }

};

console.log(person2.name);
console.log(person2.hobbies[1]);
for(const property in person2.address){
    console.log(person2.address[property]);
}