for (let i = 0; i < 5; i++) {
  console.log("log ", i);
}

let i = 1;
while (i < 11) {
  console.log("log ", i++);
}

let j = 5;
do {
  console.log("log", j--);
} while (j > 0);

//for-of loop

let str = "Hello World";

for (let s of str) {
  console.log(s);
}

//for-in loop used for objects
// fetchs the keys of the object 
const student = {
    firstName : "Raghav",
    lastName : "Dua",
    city: "Jalbalpur",
    phoneNumber: "99880077661",
    state : "Rajasthan"
}

for (let s in student) {
    console.log("key ",s," value ", student[s]);
}
