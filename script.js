const container = document.getElementById('etch-container');
const btn = document.querySelector('.grid-btn');

function drawGrid(gridSize) {
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

btn.addEventListener('click', () => {
    let gridSize = prompt("Please choose your grid size (1-100)");
    console.log("Test");

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Invalid input, please try again");
        return;
    }

    container.innerHTML = '';
    drawGrid(gridSize);
});

drawGrid(16);
