class Person{
    static age = 20;
    
    static sayName(name){
        console.log(`My name is ${name}.`);
    }
    
    static sayAge() {
        console.log(`and i am ${Person.age} years old`);
    }
}

// let name = new Person();
// console.log(name.sayName(Aman));        // Error if you try with object

console.log(Person.age);
Person.sayName("Raj");      // Call static methods directly on class
Person.sayAge();



//=========================

