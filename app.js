// Selectors.
const container = document.querySelector("#container");
const newSketchBtn = document.querySelector("#new-sketch");
const clearBtn = document.querySelector("#clear");
const rainbowBtn = document.querySelector("#rainbow");
const grayBtn = document.querySelector("#gray");

// Generates a grid.
for (let i = 0; i < 16 * 16; i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "darkgray";
  });
  container.appendChild(cell).classList.add("cell");
}

// Functions.
function newSketch() {
  let gridSize = Number(
    prompt("Choose the new grid size between 2 and 100: ", "")
  );
  if (!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 2) {
    alert("Choose a number between 1 and 100");
    return;
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
      cell.style.backgroundColor = "darkgray";
    });
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.appendChild(cell).classList.add("cell");
  }
}

function randomColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    });
  });
}

function grayColor() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "darkgray";
    });
  });
}

// Event Listeners.
newSketchBtn.addEventListener("click", () => newSketch());

clearBtn.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "lightgray";
  });
});

rainbowBtn.addEventListener("click", () => randomColor());
grayBtn.addEventListener("click", () => grayColor());
