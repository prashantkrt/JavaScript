let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".btn");
let newGameButton = document.querySelector(".newGame");
let result = document.querySelector("#result");

let playerO = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      console.log("player O clicked");
      box.innerText = "O";
      playerO = false;
    } else {
      console.log("Player X clicked");
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        displayResult(pos1);
        console.log("winner ->", pos1);
        console.log(boxes[pattern[0]].style)
        colorLineDraw(pattern);
      }
    }
  }
};

const colorLineDraw = (pattern) => {
  for (index of pattern) {
    boxes[index].style.backgroundColor = "green";
  }
};

const displayResult = (winner) => {
  result.innerText = `Congratulations !!! Winner : ${winner}`;
  disableAllButton();
  result.classList.remove("hide");
  newGameButton.classList.remove("hide");
};

const disableAllButton = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableAllButton = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  playerO = true;
  enableAllButton();
  result.classList.add("hide");
  newGameButton.classList.add("hide");
};

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
