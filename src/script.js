function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  restartButton.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
}

function cellClicked() {}

function updateCell(cell, index) {}

function changePlayer() {}

function checkWinner() {}

function restartGame() {}

let cells = document.querySelectorAll(".cell");
let statusText = document.querySelector("#statusText");
let restartButton = document.querySelector("#restartButton");

let winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();
