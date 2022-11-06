const container = document.querySelector("#container");
const columns = [];
const resetButton = document.querySelector("#reset");

function createColumns() {

    for (let i = 0; i < 16; i++) {
        // eval("const column" + i + " = document.querySelector(#" + i + ")" + ";");
        columns[i] = document.querySelector(`#column${i}`);
        columns[i].classList.add("grid");
    }
    return columns
}
createColumns();

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        const gridSquares = document.createElement("div");
        gridSquares.classList.add("gridSquare")
        gridSquares.addEventListener("pointerover", () => {
            gridSquares.classList.add("hover");
        });
        columns[j].appendChild(gridSquares);
    }    
}

