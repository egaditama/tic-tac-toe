const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleClick(cell, index));
});

function handleClick(cell, index) {
  if (!gameActive || cell.textContent !== "") return;

  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer.toLowerCase());

  checkWinner();
}

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;

    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameActive = false;

      cells[a].classList.add("winner");
      cells[b].classList.add("winner");
      cells[c].classList.add("winner");

      statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
      return;
    }
  }

  if ([...cells].every(cell => cell.textContent !== "")) {
    gameActive = false;
    statusText.textContent = "It's a Draw!";
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "winner");
  });

  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Player X's Turn";
}
