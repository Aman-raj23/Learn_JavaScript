class Person {
  constructor(name, age) {
    this._name = name;    // using _ to indicate private-like
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
// person1.name = "";           // Invalid



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(amount) {
    if (amount < 0) {
      console.log("Salary cannot be negative!");
    } else {
      this._salary = amount;
    }
  }
}

let emp = new Employee("Aman", 30000);

console.log(emp.salary);  

emp.salary = 40000;       
console.log(`Updated Salary: ${emp.salary}`);  

emp.salary = -5000;        // Invalid

