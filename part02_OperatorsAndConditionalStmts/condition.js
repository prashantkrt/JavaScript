let age = 25;
if (age > 18) {
  console.log("Can vote");
} else console.log("not eligible to vote");

let time = 20;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

let ans = age > 18 ? "can vote" : "cannot vote";
console.log(ans);

{
  let givenAge = prompt("enter the age");

  if (givenAge >= 18) {
    console.log("can vote");
  } else {
    console.log("not eligible to vote");
  }
}
