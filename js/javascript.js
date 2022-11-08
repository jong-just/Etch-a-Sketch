const container = document.querySelector("#container");
const columns = [];
const resetButton = document.querySelector("#reset");
const rows = [];
let width = 0;
let height = 0;

function getDimensions() {
    width = prompt("How tall you want it?", "");
    height = prompt("How wide you want it?", "");   
}

function giveAttribute() {
    for (let i = 0; i < height; i++) {
        const pillar = document.createElement("div");
        pillar.setAttribute("id", `column${i}`);
    
        container.appendChild(pillar);
    }
}

resetButton.addEventListener("click", () => {
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            document.getElementById(`gridSquare${j}_${i}`).classList.remove("hover"); 
        }
    }
    destroyGrid();
    sketchStart();
});

function createColumns() {

    for (let i = 0; i < height; i++) {
        columns[i] = document.querySelector(`#column${i}`);
        columns[i].classList.add("grid");
    }
    return columns
}

function createGrid() {
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            rows[i] = document.createElement("div");
            rows[i].setAttribute("id", `gridSquare${j}_${i}`);
            rows[i].classList.add("gridSquare");
            columns[j].appendChild(rows[i]);
    
        }
    
    }
}

function destroyGrid() {
    container.textContent = "";
}

function addSketch() {
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            document.getElementById(`gridSquare${j}_${i}`).addEventListener("pointerover", () => {
                document.getElementById(`gridSquare${j}_${i}`).classList.add("hover");
            }); 
        }
    }
}

function sketchStart() {
    getDimensions();
    giveAttribute();
    createColumns();
    createGrid();

    addSketch();
}

sketchStart();