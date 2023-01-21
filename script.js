const container = document.getElementById("container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseout", function() {
            cell.style.backgroundColor = "black";
        });
    }

}

createGrid(16, 16);

let btn = document.getElementById("button1");
    btn.addEventListener("click", createnewGrid)

function resetGrid() {
    container.innerText = '';
}

function createnewGrid() {
    resetGrid();
    let number = prompt("What should be the new size of your sketch (N x N)?");
    createGrid(number, number);
}