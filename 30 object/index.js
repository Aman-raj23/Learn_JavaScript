const person1 = {
    firstName: "Harry",
    lastName: "Potter", 
    age: 17,
    isStudent: true,
}


const person2 = {
    firstName: "John",
    lastName: "Wick", 
    age: 30,
    isStudent: false,
}


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(`Student: ${person1.isStudent}`);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(`Student: ${person2.isStudent}`);



//========== function inside a object =========

const person3 = {
    Name: "Snow",
    age: 22,
    work: function(name) { console.log(`${name} is Working!`)},
    fun: function() { console.log(`and he is not having fun`)}

}

const person4 = {
    Name: "Sam",
    age: 24,
    work: (name) => { console.log(`${name} is not Working!`)},
    fun: () => { console.log(`He is having fun`)}
}

person3.work("Snow");
person3.fun();
person4.work("Sam");
person4.fun();