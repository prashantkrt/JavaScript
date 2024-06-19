// number , boolean , string , Undefined,  Null, BigInt, Symbol

let x = 10;
console.log(typeof(x));

let y = 10.0
let z = 10.00
console.log(typeof(y));
console.log(typeof y);
console.log(typeof z);

let isFollow = true; 
console.log(typeof(isFollow));
console.log(typeof isFollow);

let u;
console.log(typeof(u));

let myName = "Rajat";
console.log(typeof(myName));

let bb = BigInt("1233343");
console.log(typeof bb);

let v = null;
console.log(typeof v);

let s = Symbol("Hello");
console.log(typeof s);

const Student = {
     age : 10,
     city : "Jabalpur",
     pincode : "123122",
     graduationYear : 2023
};

console.log(Student);
console.log(typeof Student);
console.log(Student.age)
console.log(Student["age"]);
console.log(Student.city);
console.log(Student["pincode"]);

Student.myName="Amar";
Student.age = Student.age+1;
console.log(Student);


 
