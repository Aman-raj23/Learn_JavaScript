const person1 = {
    name: "Sam",
    age: 24,
    sayHello: function() { console.log(`hey! I'm ${this.name}`)},       // this.name = person1.name
    work: function() { console.log(`${this.name} is not Working!`)}
}

//======== Doesn't work with arrow functions ========


const person2 ={
    age: 20,
    sayAge: () => { console.log(`I'm ${this.age} years old`)}          // undefined value with arrow functions
}

person2.sayAge();
