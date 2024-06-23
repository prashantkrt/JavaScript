const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

//example :
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const result = document.querySelector(".amount input");

for (let select of dropdowns) {
  for (let currenyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currenyCode;
    newOption.value = currenyCode;    
    if (select.name === "from" && currenyCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currenyCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";  
      msg.innerText = "Please enter the values > 0";  
    }
    else{
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    //let finalAmount = amtVal * 83;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    }    
  }; 
  

const updateFlag = (element) => {  
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click",(event)=>{
     event.preventDefault();
     btn.classList.add(".myButton");     
     updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
  });
