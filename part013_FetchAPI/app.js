const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const factButton = document.querySelector("#getFact");

const getFacts = async () => {
  console.log("getting data ....");
  let response = await fetch(url); //gives promise
  console.log(response); //JSON Format
  console.log(response.status);
  let data = await response.json(); // returns the promise
  console.log(data);
  console.log(data[0]);
  console.log(data[0].text);
  factPara.innerText = data[0].text;
};

factButton.addEventListener("click", getFacts);


//promise chaining 
function getTheFacts() {
  fetch(url)
    .then((response) => {
      return response;
    })
    .then((data) => {
      console.log(data);
    });
}
