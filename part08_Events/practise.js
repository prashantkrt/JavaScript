let btn = document.querySelector("button");
let currentMode = "light";
btn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
       // document.querySelector("body").style.backgroundColor="black";       
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        btn.innerText="White Mode";
    }
    else{
     currentMode="light";
     // document.querySelector("body").style.backgroundColor="white";     
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      btn.innerText="Dark Mode";
    }
     console.log("clicked the button->",currentMode);
})