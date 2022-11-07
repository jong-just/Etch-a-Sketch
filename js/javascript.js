const container = document.querySelector("#container");
const columns = [];
const resetButton = document.querySelector("#reset");
const rows = [];
const grid = [];
let res = prompt("How big you want it?", "");

for (let i = 0; i < res; i++) {
    const pillar = document.createElement("div");
    pillar.setAttribute("id", `column${i}`);

    container.appendChild(pillar);
}


resetButton.addEventListener("click", () => {
    for (let j = 0; j < res; j++) {
        for (let i = 0; i < res; i++) {
            document.getElementById(`gridSquare${j}_${i}`).classList.remove("hover"); 
        }
    }
});

function createColumns() {

    for (let i = 0; i < res; i++) {
        columns[i] = document.querySelector(`#column${i}`);
        columns[i].classList.add("grid");
    }
    return columns
} createColumns();

for (let j = 0; j < res; j++) {
    for (let i = 0; i < res; i++) {
        rows[i] = document.createElement("div");
        rows[i].setAttribute("id", `gridSquare${j}_${i}`);
        rows[i].classList.add("gridSquare");
        columns[j].appendChild(rows[i]);

    }

}

for (let j = 0; j < res; j++) {
    for (let i = 0; i < res; i++) {
        document.getElementById(`gridSquare${j}_${i}`).addEventListener("pointerover", () => {
            document.getElementById(`gridSquare${j}_${i}`).classList.add("hover");
        }); 
    }
}

