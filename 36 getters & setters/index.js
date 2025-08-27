class Person {
  constructor(name, age) {
    this._name = name; // using _ to indicate "private-like"
    this._age = age;
  }


  // Setter
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.error("Name cannot be empty!");
    }
  }


  // Getter
  get name() {
    return this._name;
  }

}

let person1 = new Person("Aman", 20);

console.log(person1.name);   // Access via getter = "Aman"

person1.name = "Raj";        // we can also update via setter
console.log(person1.name);  
person1.name = "";           // Invalid



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%