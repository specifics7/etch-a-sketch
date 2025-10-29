const container = document.getElementById('etch-container');
const btnReset = document.querySelector('.reset-btn');
const gridSlider = document.getElementById('grid-slider');
const gridSizeDisplay = document.getElementById('grid-size-display');
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

btnReset.addEventListener('click', () => {
    resetGrid();
})

gridSlider.addEventListener('input', (e) => {
    const newSize = parseInt(e.target.value);
    gridSizeDisplay.textContent = `${newSize} x ${newSize}`;
    container.innerHTML = '';
    drawGrid(newSize);
});

drawGrid(currGridSize);
