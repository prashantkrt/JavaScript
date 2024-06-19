let str = "Prashant";
console.log(str.length);
console.log(str[0]);

//template litrals

let obj = {
  item: "pen",
  price: 10,
};

console.log("item ", obj.item, " cost ", obj.price);
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);

// \n line change
// \t tab space

//String methods doesn't make changes to original method

let ss = "Hello";
console.log(ss.toUpperCase());
console.log(ss.toLowerCase());

let sss = " Hello  ";
console.log(sss);
console.log(sss.trim());

console.log(str.charAt(0));
let newStr = str.replace("P", "L");
console.log(str);
console.log(newStr);

// Common Result Both give the same results in the given cases.

// If start == stop, both return an empty string
// If the stop is omitted, both extracts characters till the end of the string
// If any argument is greater than the string’s length, the string’s length will be used in that case.

// JavaScript substring() different results of substring()
// If start > stop, then the function swaps both arguments.
// If any argument is negative or is NaN, it is treated as 0.

// JavaScript slice() different results of slice()
// If start > stop, This function will return an empty string. (“”)
// If the start is negative, It sets char from the end of the string, like substr().
// If stop is negative, It sets stop = string.length – Math.abs(stop) (original value)

let slicedStr = str.slice(2, 90);
console.log(slicedStr);

let subStr = str.substring(3, 2);
console.log(subStr);

let str1= "Prashant"
let str2= "Kumar"

let strAns = str1.concat(str2);
console.log(strAns);

let userName = "@"+"prashant"+"13";
console.log(userName);
