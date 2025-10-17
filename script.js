const container = document.getElementById('etch-container');
const btnNewGrid = document.querySelector('.grid-btn');
const btnReset = document.querySelector('.reset-btn');
let currGridSize = 16;

function drawGrid(gridSize) {
    currGridSize = gridSize;
    // Set CSS variable for grid size
    container.style.setProperty('--grid-size', gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');

        div.addEventListener('mouseover', () => {
            div.classList.add('hovered');
        });
        container.appendChild(div);
    }
}

function resetGrid() {
    container.innerHTML = '';
    drawGrid(currGridSize);
}

btnNewGrid.addEventListener('click', () => {
    let gridSize = prompt("Please choose your grid size (1-100)");
    console.log("Test");

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Invalid input, please try again");
        return;
    }

    container.innerHTML = '';
    drawGrid(gridSize);
});

btnReset.addEventListener('click', () => {
    resetGrid();
})

drawGrid(currGridSize);
