class Parent {
  constructor() {
    console.log("Inside the Parent's constructor");
  }

  hello() {
    console.log("Hello World");
  }
}
//In JavaScript, a class can only have one constructor.
//This means you cannot define multiple constructors within the same class.
class Child extends Parent {
  constructor() {
    super();
    console.log("Inside the Child Constructor");
  }

  greet() {
    console.log("Good Morning friends");
  }
}

//Yes, it is mandatory for a derived class (a class that extends another class) to call super()
// in its constructor before accessing this or returning from the constructor.
//This is a requirement in JavaScript when using classes and inheritance.

let childObj = new Child();

console.log(childObj.greet());
console.log(childObj.hello());

class Person {
  constructor() {
    this.data = "Parent Data";
    console.log("Person Constructor");
  }
  eat() {
    console.log("Person can eat");
  }

  sleep() {
    console.log("Person can sleep");
  }
}

//In JavaScript, super can be used to call methods from the parent class
//but it cannot be used to directly access properties or variables of the parent class.

// when we create own constructor in child class then we have to use super() to call Parent's constructor
class Employee extends Person {
  work() {
    var data = "Employee Data";
    super.eat();
    console.log("Person can work ", data, this.data);
  }
  //override
  sleep() {
    console.log("Employee is sleeping");
  }
}

let empObj = new Employee();
console.log(empObj);
console.log(empObj.work());
console.log(empObj.eat());
console.log(empObj.sleep());

// Parent class
class Parents {
  constructor(name) {
    this.name = name; // Parent class variable
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

// Child class
class Children extends Parents {
  constructor(name, age) {
    super(name); // Call the parent class constructor
    this.age = age; // Child class variable
  }

  greet() {
    return "Hello My name is hero";
  }

  introduce() {
    return `${this.greet()} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Child class
const child = new Children("John", 12);
console.log(child.introduce()); // Output: Hello, my name is John and I am 12 years old.

// In JavaScript, super can be used to call methods from the parent class
// but it cannot be used to directly access properties or variables of the parent class.
// Parent class
class ParentExample {
  constructor(name) {
    this._name = name; // Parent class variable
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }
}

// Child class
class ChildExample extends ParentExample {
  constructor(parentName, childName) {
    super(parentName); // Call the parent class constructor to initialize the parent variable 'name'
    this._childName = childName; // Initialize the child class variable 'name'
  }

  getParentName() {
    return super.getName(); // Access the parent class 'name' variable using a parent class method
  }

  getChildName() {
    return this._childName; // Access the child class 'name' variable
  }

  setParentName(name) {
    super.setName(name); // Set the parent class 'name' variable using a parent class method
  }

  setChildName(name) {
    this._childName = name; // Set the child class 'name' variable
  }
}

// Create an instance of the Child class
const childExample = new ChildExample("ParentName", "ChildName");

console.log(childExample.getParentName()); // Output: ParentName
console.log(childExample.getChildName()); // Output: ChildName

childExample.setParentName("NewParentName");
childExample.setChildName("NewChildName");

console.log(childExample.getParentName()); // Output: NewParentName
console.log(childExample.getChildName()); // Output: NewChildName
