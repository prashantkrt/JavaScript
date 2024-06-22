const student = {
  fullName: "Prashant",
  marks: 89,
  printMarks: function () {
    console.log("marks=", this.marks);
  },
};

console.log(student.printMarks);

console.log(student.toString);

const employee = {
  //better way
  calTax() {
    console.log("tax rate is 30%");
  },
  calTax2: function () {
    console.log("tax rate is 40%");
  },
};

const myTax = {
  salary: 3000
};

myTax.__proto__= employee;
console.log(myTax);
console.log(myTax.calTax());
console.log(employee.calTax());
console.log(employee.calTax2());


const taxRate = {
    calTax(){
        console.log("Tax rate is 30%");
    }
}

const employee1 ={
    calTax(){
        console.log("tax rate is 25%");
    }
}

// if both have the same method then object mehtod will be called not prototypes
employee1.__proto__=taxRate;
console.log(employee1.calTax());
