let btn1 = document.querySelector("#btn1");
console.log(btn1);

let btn2 = document.querySelector("#btn2");
console.log(btn2);

let a = 1;
let b = 1;
btn1.onclick = (e) => {
  console.log("button was clicked");  
  console.log(a++);
  console.log(e);
  console.log(e.type);//click
  console.log(e.target);//button
  console.log(e.clientX, e.clientY);

};

btn2.ondblclick = () => {
    console.log("button was clicked 2x");    
    console.log(b++);
  };

let box = document.querySelector("#box");

box.onmouseover = (evt)=>{
 console.log("you are over the div tag");
 console.log(evt);
 console.log(evt.type);//mouseover
 console.log(evt.target);//div
 console.log(evt.clientX, evt.clientY);
}

// Event listeners better approach all will be trigger if clicked it won't override 

let btn3= document.querySelector("#btn3");

btn3.addEventListener("click",(e)=>{
    console.log("clicked the button")
    console.log(e);
})

btn3.addEventListener("click",()=>console.log("event handler 1"));
btn3.addEventListener("click",()=>console.log("event handler 2"));
btn3.addEventListener("click",()=>console.log("event handler 3"));
btn3.addEventListener("click",()=>console.log("event handler 4"));



const handler = ()=>console.log("event handler 5");
btn3.addEventListener("click",handler);
btn3.addEventListener("click",handler);
btn3.addEventListener("click",handler);// will now print only single time since we have given memory to single function

//btn3.removeEventListener("click",handler); // removes from the memory
