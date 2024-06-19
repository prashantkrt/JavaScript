firstName = "Rajesh";
age = 20;
height = 5.5;
x = null;
y = undefined;
isFollow = true;
console.log(firstName + " " + age + " " + height);
console.log(x);
console.log(y);

/*
 var :  Varable can be re-declared & updated. A global scope variable ->  (older way) 2015 

 problem : 

 var age = 24 ;
 var age = 25 ; 
 var age = 56 ;
 console.log(age) // 56 

 ES6 ->  
 let :   variable cannot be re-declared but can be updated. A block scope varaible 

 let age = 24;
 age=34;
 age=56;
 console.log(age) //56

 const : variable cannot be re declared or updated. A block scope variable

 const age = 24
 console.log(age)
 */

const a = 10;
console.log(a);

let b;
console.log(b); //undefined

//blocks
{
  let a = 10;
  console.log(a);
}

{
  let a = 12;
  console.log(a);
}
