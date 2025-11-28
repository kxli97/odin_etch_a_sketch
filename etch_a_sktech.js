console.log('hellow world');
const container = document.querySelector('.container');

function createGrid(gridSize) {
    const totalSquare = gridSize * gridSize;
    const squareSize = 640/gridSize;

    for (let i = 0; i < totalSquare; i++) {
        
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.dataset.interactions = 0;
        container.appendChild(square);

        square.addEventListener('mouseenter', () => {
            let interactions = parseInt(square.dataset.interactions);
            
            // darkening effect can only work until 10th times
            if (interactions < 10) {
                interactions++;
                square.dataset.interactions = interactions;
                
                // Calculate opacity (10% per interaction)
                const opacity = interactions * 0.1;
                square.style.backgroundColor = `rgba(217, 176, 217, ${opacity})`;
            }
    });
    };
}

createGrid(16);


const resetButton = document.getElementById('grid-size-button');

resetButton.addEventListener('click', () => {
    console.log('button clicked');
    let newSize = prompt("Please enter grid size 2-100: ");
    if (newSize <= 1) {
        newSize = 16
    };
    container.innerHTML = '';
    createGrid(newSize);
});
