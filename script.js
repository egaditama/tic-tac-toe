const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";


const resetBtn = document.getElementById("resetBtn");

cells.forEach(cell => {
  cell.addEventListener("click", () => {

    if (cell.textContent !== "") return;

    cell.textContent = currentPlayer;

    if (currentPlayer === "X") {
      cell.classList.add("x");
      currentPlayer = "O";
    } else {
      cell.classList.add("o");
      currentPlayer = "X";
    }

  });
});

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


