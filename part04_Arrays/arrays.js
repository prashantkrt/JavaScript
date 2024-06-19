let marks = [23, 45, 90, 11, 100];

console.log(marks.length);
console.log(marks[1]);

for (let i = 0; i < marks.lengt; i++) {
  console.log(marks[i]);
}

for (let val of marks) {
  console.log(val);
}

for (let val in marks) {
  console.log(marks[val]);
}

let citis = ["Jabalpur", "Jaipur", "Delhi", "Mumbai", "Gwalior"];
let info = ["City", 12, "State"];

//calculate the average marks 

marks = [12,13,78,90,99,6];
let sum = 0;
let average = 0;

for(let val of marks)
{
    sum +=val;
}  

average=sum/marks.length;
console.log(average);


//Array methods
//at the end pushes the new element
marks.push(111);
console.log(marks)

//removes the last element
marks.pop();
console.log(marks)

//returns new String 
let str = marks.toString();
console.log(str);

//concats the two arrays
let a = [1,2,3];
let b = [4,5,6];

let c= a.concat(b);
console.log(c.toString());

// pushes in the front/start-> unshift()
// deletes from the front -> shift()

{
    let arr = [1,2,3,4];
    arr.unshift(0);
    console.log(arr);

    arr.shift();
    console.log(arr)
}

let arr = [2,3,4,5,6,7,8];
let arrSliced = arr.slice(0,2);
console.log(arrSliced);

//make changes in the same array 
//splice(startIndex,delCount,newElement...)

arr= [1,2,3,4,5,6,7,8,9,10];
arr.splice(2,2,101,102,103,104);
console.log(arr);

//only add element 
arr.splice(2,0,101);
console.log(arr);

//only delete 
arr.splice(2,2);
console.log(arr);

arr = [1,2,3,4,5,6,7,8,9,10];
//replace 3 
arr.splice(2,1,101);
console.log(arr)


