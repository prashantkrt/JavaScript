alert("Hello");
console.log(window);
window.console.log("hello world");
//console.dir(window.document.body.childNodes[0]);

document.body.style.background = "purple";
window.document.body.childNodes[1].innerText = "Learn JavaScript asap";

let heading = document.getElementById("header1");
console.log(heading);

document.getElementById("header2").innerText = "Custom text";

let headings = document.getElementsByClassName("header");
console.log(headings);

let parahs = document.getElementsByTagName("p");
console.log(parahs);

//query Selector
//document.querySelector("id/class/tag") -> NodeList

let firstElement = document.querySelector("p");
console.dir(firstElement);

let elements = document.querySelectorAll("p");
console.dir(elements);

//DOM Manipulation
let firstElementTagName = document.querySelector("#header1");
console.log(firstElementTagName.tagName); //returns the tage

console.log(document.body.firstChild);

console.log(document.querySelector("div").children); //HTMLCollection

console.log(document.querySelector("div")); // first div

console.dir(document.querySelector("#div2").innerText); // texts
console.dir(document.querySelector("#div2").innerHTML); // with tags

let myDiv = document.querySelector("#div2");
myDiv.innerText = "abcd";

//append
myDiv.innerText = myDiv.innerText + "efgh";

let myHeading = document.getElementById("header2");
myHeading.innerText = "My Heading";
myHeading.innerHTML = "<i> my Heading </i>";

// same as innterText but also fetch the hidden element
let myHiddenProps = document.querySelector("#hdn");
console.log(myHiddenProps.textContent);

let divs = document.querySelectorAll(".myDiv");
console.log(divs);

divs[0].innerText = "Hello";
divs[1].innerText = "World";
divs[2].innerText = "Champs";
divs[3].innerText = "!!!!";

for (let d of divs) {
  console.log(d);
}

let index = 0;
for (let d of divs) {
  d.innerText = `div number ${index}`;
  index++;
}
