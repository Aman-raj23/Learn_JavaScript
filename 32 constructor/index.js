function Person(name, age) {
    this.name = name;   // 'this' refers to the new object being created
    this.age = age;

    this.greet = function() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}

// Creating objects

let person1 = new Person("John", 21);
let person2 = new Person("Walter", 30);

console.log(person1.name);
person1.greet(); 
person2.greet(); 


//--------------------------------------------

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(this.brand + " " + this.model + " "+this.year+ " is starting...");
    };
}

let car1 = new Car("Tesla", "Model 3", 2025);
let car2 = new Car("BMW", "X5", 2024);

car1.start(); 
car2.start();
