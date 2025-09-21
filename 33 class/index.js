class Student{
    constructor(id, name, branch){
        this.id = id;
        this.name = name;
        this.branch = branch;
    }
    // we declare a method in class 
    displayData(){
        console.log("id: "+this.id+", Name: "+this.name+", Branch: "+this.branch );
    }
}

const student1 = new Student(1, "Sam", "CSE");          // object
const student2 = new Student(2, "Walter", "ECE");        // object
console.log(student1.name +" "+ student1.branch); 
student1.displayData();
student2.displayData();


//================== e.g->2 ==========================

class Person {
    constructor(name, age) {
        this.name = name;  
        this.age = age;
    }


    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// object
let person1 = new Person("Walter", 21);
let person2 = new Person("Saka", 20);

person1.greet(); 
person2.greet(); 
