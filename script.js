const container = document.getElementById("container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        /*cell.innerText = (c);*/
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener("mouseout", function() {
            cell.style.backgroundColor = "black";
        });
    }

}

createGrid(16, 16);

/*var etchcontainer = document.querySelectorAll(".container");
etchcontainer.addEventListener("click", function() {
    etchcontainer.style.backgroundColor = "black";
});*/
