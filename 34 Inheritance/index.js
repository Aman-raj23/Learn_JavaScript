class User {

    sayName() {
        console.log(`HEY! MY NAME IS ${this.name}`);
    }

    sayAge() {
        console.log(`AND I'M ${this.age} YEARS OLD`);
    }
    
}

class User1 extends User {
    name = "Max";
    age = 22;
}

class User2 extends User {
    name = "John";
    age = 30;


}

const user1 = new User1();
const user2 = new User2();

user1.sayName();
user1.sayAge();

user2.sayName();
user2.sayAge();


//%%%%%%%%%%%%%%%% example 2 %%%%%%%%%%%%%%%%%%


class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(this.name + " makes a sound.");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " barks.");
    }
}

let dog1 = new Dog("Tommy");
dog1.sound();
dog1.bark(); 
