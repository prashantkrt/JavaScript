hello = () => {
  console.log("Hello");
};

function meFunc() {
  console.log("My Func");
}
// setTimeout takes callback functions
setTimeout(hello, 2000);
setTimeout(meFunc, 4000);

// callbacks
// A callback is a function passed as a an argumant to another function

function sum(a, b) {
  return a + b;
}

function calculator(a, b, sumCalculatorCallBack) {
  let sum = sumCalculatorCallBack(a, b);
  console.log(sum);
}

calculator(2, 3, sum);

calculator(3, 4, (a, b) => a + b);

// callback hell
// nested callback stacked below one another forming a pyramid structure.
// this kind of structure is difficult to understand

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// wrong way
// getData(1,getData(2),getData(3));
// instead go this way use array way

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

let check = (a) => {
  console.log(a); //undefined
};

console.log(check());

//Promises
//promises is for the "eventual" completion of task. It is an object in JS.
//It is a solution to callback hell.

// pending, fulfilled/resolved resolve("do some") and rejected reject("do some")
let promises = new Promise((resolve, reject) => {
  console.log("I am a Promise");
});

function getMyData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

let finalValue = getMyData(100);
console.log(finalValue);

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a new Promise");
    resolve("success");
    //reject("rejected");
  });
};

let promise = getPromise();

//in case of resolved
promise.then((res) => {
  console.log("promise fullfilled ", res);
});

//in case of error
promise.catch((error) => {
  console.log("rejected ", error);
});

function getTheData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      if (dataId) {
        resolve("success");
      } else {
        reject("rejected");
      }
    }, 2000);
  });
}

//did self check for learning purpose
getTheData(400).then(getTheData(404).then(getTheData(408)));

//promises chaining

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 1");
      resolve("success");
    }, 8000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some data 2");
      resolve("success");
    }, 8000);
  });
}

// let myPromise = asyncFunction1();
// myPromise.then((res)=>{
//   console.log(res);
// })

console.log("fetching the data1 !!!");
let p1 = asyncFunction1();
p1.then((res) => {
  console.log(res);
  console.log("fetching data 2 !!!");
  let p2 = asyncFunction2();
  p2.then((res) => {
    console.log(res);
  });
});

//promise chain
getTheData(200).then((res) => {
  console.log(res);
  getTheData(300).then(() => {
    console.log(res);
  });
});

//better approach
getTheData(2000)
  .then((res) => {
    return getTheData(3000);
  })
  .then(() => {
    return getTheData(4000);
  })
  .then((res) => {
    return getTheData(5000);
  })
  .then((res) => {
    console.log(res);
  });

// Async-Await
// always return the promise
// ** await ** pauses the execution of its surroundings async function until the promise is settled.

//returns the promise even if you have not metioned the return type
async function helloWorld() {
  console.log("Hello Async Function here!!");
}
console.log(helloWorld());

getWeatherDetails();

async function getWeatherDetails() {
  await api(); //first call
  await api(); //secound call
}

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather details");
      resolve(200);
    }, 10000);
  });
}


// using async await for more easiness for the previous problems
function getAllData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      if (dataId) {
        resolve("success");
      } else {
        reject("rejected");
      }
    }, 2000);
  });
}

async function getAllTheData() {
  await getAllData(1000);
  await getAllData(2000);
  await getAllData(3000);
}

//IIFE Immediately Invoked Funtion Expression
//No need to call the function it will get called automatically once written 

//three ways 

(function (){

})();

(()=>{

})();

(async ()=>{

})();


// async function getAllTheData() {
//   await getAllData(1000);
//   await getAllData(2000);
//   await getAllData(3000);
// }

(async function () {
  await getAllData(1000);
  await getAllData(2000);
  await getAllData(3000);
})();

(async ()=>{
  await getAllData(1000);
  await getAllData(2000);
  await getAllData(3000);
})();
