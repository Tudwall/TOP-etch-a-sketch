// Selectors.
const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  let cell = document.createElement("div");
  container.appendChild(cell).classList.add("cell");
}