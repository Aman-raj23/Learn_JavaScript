class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Dog extends Animal {
  constructor(name, type, runSpeed) {
    super(name, type);                 // calls parent constructor
    this.runSpeed = runSpeed;
  }

  info() {
    console.log(this.name + " is a " + this.type + " and can run with "+this.runSpeed+" kmph. ");
  }
}


class Fish extends Animal {
    constructor(name, type, swimSpeed){
        super(name, type);
        this.swimSpeed = swimSpeed;
    }

    info() {
            console.log(this.name + " is a " + this.type + " and can swim with "+this.swimSpeed+" kmph. ");
    }
}

let dog = new Dog("Tommy", "Dog", 35);
dog.info(); 

let fish = new Fish("Maria", "Fish", 15);
fish.info();



//%%%%%%%%%%%%%%%%%%%%% example 2 %%%%%%%%%%%%%%%%%%%%%%%%%%%%



class User {
  login(name) {
    console.log(name +" logged in");
  }
}

class Admin extends User {
  login(name) {
    super.login(name);          // Keep normal user login logic
    console.log("Admin has extra dashboard access");
  }
}

class User1 extends User {
    login(name) {
        super.login(name);
    }
}

let admin = new Admin();
admin.login("Admin1");

let user1 = new User();
user1.login("User1");

