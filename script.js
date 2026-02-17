const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

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