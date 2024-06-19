function myFunction() {
  console.log("Welcome to my function");
}
myFunction();

function myFunction2(a, b) {
  return a + b;
}
console.log(myFunction2(1, 2));

//Arrow Functions
const myFunc = () => {
  console.log("Hello");
};
myFunc();

const myFunc2 = (a, b) => {
  return a + b;
};
console.log(myFunc2(2, 3));

const myFunc3 = (a, b) => a + b;
const myFunc4 = () => console.log("Hello Wolrd");

// returns the vowel
function getVowels(a) {
  let count = 0;
  let str = a.toLowerCase();
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  return count;
}
console.log("number of vowels", getVowels("aeiou"));
console.log("number of vowels", getVowels("AEIOU"));
console.log("number of vowels", getVowels("Prashant"));

const getVowelsCount = (a) => {
  let count = 0;
  let str = a.toLowerCase();
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  return count;
};

let arr = [1, 2, 3, 4, 5, 5, 6, 7];
//callback function
//only for arrays not for Strings
arr.forEach(function myFunction(val) {
  console.log(val);
});

//callback functions which passes functions as a paramter
arr.forEach((val) => console.log(val));

// three params items , index and arrayItself
arr.forEach(function myFunction(val, index, myArray) {
  console.log(val, index, myArray);
});

//****Impl****/
// Higher order Functions/Methods
// which takes param as functions or return the function

let nums = [2, 3, 4, 5, 6];
nums.forEach((val) => {
  console.log(val * val);
});

// Arrays Method Map
// Creates the new array with the results of some operation. The value its callback returns are used
// to form new array

{
  let arr = [2, 3, 4, 5, 6, 7];

  let newArray = arr.map((val) => val * 2);

  newArray.forEach((val) => console.log(val));
}


//filter
//creates the new array on the basis of conditon of the filtering
{
    let arr = [2, 3, 4, 5, 6, 7];

    let newArray = arr.filter((val)=>{
        return val%2==0;
    })

    console.log(newArray);
}

// reduce 
// perform some operations and reduce the array to a single value. 
// It returns the single value


{
    let arr = [2, 3, 4, 5, 6, 7];
    let sum = arr.reduce((a,b)=>a+b);
    console.log(sum);


    const initialValue = 0;
    sum = arr.reduce((a,b)=>{
        return a+b+initialValue;
    });

    console.log(sum)
}

{
let a = [1,2,3,4,5,6,7,8,9,10];
let ans = a.filter(val=>val%2==0).map(val=>val*2).reduce((a,b)=>a+b);
console.log(ans);
}

