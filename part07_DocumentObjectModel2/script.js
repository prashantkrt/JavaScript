//get attribute
let div= document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let cls = div.getAttribute("class");
console.log(cls);

//set the attribute values 
div.setAttribute("id","myid123");
console.log(div.getAttribute("id"));

div.setAttribute("id","box")

//accessing the style
let myDiv=document.querySelector("#box");
myDiv.style.backgroundColor="green"

myDiv.style.fontSize="20px";
myDiv.innerText="Hello";

//myDiv.style.visibility="hidden";

//Insert Elements

let newBtn = document.createElement("button");
newBtn.innerText ="Click me!!";
console.log(newBtn);

let myDiv2 = document.querySelector("#box");
myDiv2.append(newBtn);//at the end inside the div

myDiv2.prepend(newBtn); // inside div at the start

myDiv2.before(newBtn); // before the div

myDiv2.after(newBtn); //after the div
let p = document.querySelector("p");
p.after(newBtn); //after the para

// practise 
let newHeader = document.createElement("h1");
newHeader.innerHTML="<i> my header </i>";

document.querySelector("body").append(newHeader);
// remove elements
let para = document.querySelector("p");
para.remove();


