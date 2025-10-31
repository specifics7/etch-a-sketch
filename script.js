const container = document.getElementById('etch-container');
const btnReset = document.querySelector('.reset-btn');
const btnRainbow = document.getElementById('rainbow-toggle')
const gridSlider = document.getElementById('grid-slider');
const gridSizeDisplay = document.getElementById('grid-size-display');

let isRainbow = false;
let currGridSize = 16;
let isMouseDown = false;

function drawGrid(gridSize) {
    currGridSize = gridSize;
    // Set CSS variable for grid size
    container.style.setProperty('--grid-size', gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('grid-square');

    
        // Draw on mouseover while mouse is pressed
        divSquare.addEventListener('mouseover', () => {
            if (isMouseDown) {
                divSquare.classList.add('hovered');
                if (isRainbow === true) {
                    divSquare.style.backgroundColor = setColor();
                }
            }
        });
        // Draw when clicking down mouse
        divSquare.addEventListener('mousedown', (e) => {
            if (e.button === 0) {
                divSquare.classList.add('hovered');
                if (isRainbow === true) {
                    divSquare.style.backgroundColor = setColor();
                }
            }
        });
        container.appendChild(divSquare);
    }
}

function resetGrid() {
    container.innerHTML = '';
    drawGrid(currGridSize);
}

function setColor() {
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randColor;
}

btnReset.addEventListener('click', () => {
    resetGrid();
})

btnRainbow.addEventListener('click', () => {
    isRainbow = !isRainbow;
    btnRainbow.classList.toggle('active');
});

gridSlider.addEventListener('input', (e) => {
    const newSize = parseInt(e.target.value);
    gridSizeDisplay.textContent = `${newSize} x ${newSize}`;
    container.innerHTML = '';
    drawGrid(newSize);
});

container.addEventListener('mousedown', (e) => {
    // 0 = left click, 1 = scroll click, 2 = right click
    if (e.button === 0) {
        e.preventDefault();
        isMouseDown = true;
    }
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
});
// Handling when mouse has left container
container.addEventListener('mouseleave', () => {
    isMouseDown = false;
});
// Prevent default drag behavior
container.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

drawGrid(currGridSize);