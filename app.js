// Selectors.
const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = "black";
  });
  container.appendChild(cell).classList.add("cell");
}
