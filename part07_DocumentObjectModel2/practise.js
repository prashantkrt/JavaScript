let newBtn = document.createElement("button");
newBtn.innerText="Click me !!";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);
document.querySelector("body").style.backgroundColor="black";

let paras = document.querySelector("p");
console.log(paras);
console.log(paras.classList);
console.log(paras.getAttribute("class"));
paras.setAttribute("class","newClass");

paras.classList.add("content");