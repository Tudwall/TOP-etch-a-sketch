// Selectors.
const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset");

// Event Listeners.
resetBtn.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// Functions.

for (let i = 0; i < 16 * 16; i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
  container.appendChild(cell).classList.add("cell");
}
