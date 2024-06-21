let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const result = document.querySelector("#msg");
let userResult = document.querySelector("#user-score");
let computerResult = document.querySelector("#computer-score");

const playGame = (userChoice) => {
  console.log(userChoice);
  //generate computer choice
  let computerChoice = generateComputerChoice();
  if (computerChoice === userChoice) {
    result.innerText = `Draw!! both ${computerChoice}`;
    result.style.backgroundColor = "#004e98";
  } else if (
    (computerChoice === "rock") & (userChoice === "scissor") ||
    (computerChoice == "scissor" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "rock")
  ) {
    compScore++;
    computerResult.innerText = compScore;
    result.innerText = `Computer win!! ${computerChoice} beats ${userChoice}`;
    result.style.backgroundColor = "red";
  } else {
    userScore++;
    userResult.innerText = userScore;
    result.innerText = `User win!! ${userChoice} beats ${computerChoice}`;
    result.style.backgroundColor = "green";
  }
};

const generateComputerChoice = () => {
  //rock paper scissor
  const options = ["rock", "paper", "scissor"];
  let randomComputerChoice = Math.floor(Math.random() * 3);
  return options[randomComputerChoice];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice);
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
