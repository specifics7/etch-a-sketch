const container = document.getElementById('etch-container');

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');

    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    });

    container.appendChild(div);

}