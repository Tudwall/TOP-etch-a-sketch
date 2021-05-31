// Selectors.
const container = document.querySelector("#container");
const newSketchBtn = document.querySelector("#new-sketch");
const clearBtn = document.querySelector("#clear");

// Generates a grid.
for (let i = 0; i < 16 * 16; i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
  container.appendChild(cell).classList.add("cell");
}

// Functions.
function newSketch() {
  let gridSize = Number(
    prompt("Choose the new grid size between 1 and 100: ", "")
  );
  if (!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 1) {
    alert("Choose a number between 1 and 100");
  }

  // Delete the existing grid
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    container.removeChild(cell);
  });

  // Create the new grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.appendChild(cell).classList.add("cell");
  }
}

// Event Listeners.
newSketchBtn.addEventListener("click", () => newSketch());

clearBtn.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});
