const container = document.querySelector("#container");
const columns = [];
const resetButton = document.querySelector("#reset");
const rows = [];
// const gridSquare = document.createElement("div");


resetButton.addEventListener("click", () => {
    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`gridSquare${j}_${i}`).classList.remove("hover"); 
        }
    }
});

function createColumns() {

    for (let i = 0; i < 16; i++) {
        // eval("const column" + i + " = document.querySelector(#" + i + ")" + ";");
        columns[i] = document.querySelector(`#column${i}`);
        columns[i].classList.add("grid");
    }
    return columns
} createColumns();

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        rows[i] = document.createElement("div");
        rows[i].setAttribute("id", `gridSquare${j}_${i}`);
        rows[i].classList.add("gridSquare");
        columns[j].appendChild(rows[i]);

    }

}

for (let j = 0; j < 16; j++) {
    for (let i = 0; i < 16; i++) {
        document.getElementById(`gridSquare${j}_${i}`).addEventListener("pointerover", () => {
            document.getElementById(`gridSquare${j}_${i}`).classList.add("hover");
        }); 
    }
}

