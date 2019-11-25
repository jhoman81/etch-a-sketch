const container = document.querySelector("#container");
const gridWidth = 968;
var numTiles = 16;

createGrid(numTiles);

// popup prompt for new grid, defaults to 16x16
var newButton = document.querySelector("#newbtn");
newButton.addEventListener('click', () => {
     numTiles = prompt("How many rows/tiles in the grid?", 16);
     removeTiles();
     createGrid(numTiles);
})

// creates a new grid based on the number of tiles defined by user 
function createGrid (numTiles) {
    for (var j = 0; j < numTiles; j++) {
        var gridRow = document.createElement('div');
        gridRow.classList.add("grid-row" + j);
        container.appendChild(gridRow);

        for (var i = 0; i < numTiles; i++) {
            var gridBlock = document.createElement('div');
            var dimensions = gridWidth / numTiles;
            gridBlock.classList.add("tiles");
            gridBlock.style.cssText = "width: " + dimensions + "px; height: " + dimensions + "px;";
            gridRow.appendChild(gridBlock);
        }
    }
    addListeners();
}

// removes all of the tiles from the page to make a new grid
function removeTiles() {
    var tilesToRemove = document.getElementsByClassName("tiles");
    while(tilesToRemove.length > 0) {
        tilesToRemove[0].parentNode.removeChild(tilesToRemove[0]);
    }
}

// adds 'mouseover' event listeners to every tile 
function addListeners() {
    const tiles = document.getElementsByClassName("tiles");

    for (var k = 0; k < tiles.length; k++) {
        tiles[k].addEventListener('mouseover', fillIn);
    }
}

// fills in each tile when the mouse goes over them
function fillIn() {
    this.style.backgroundColor = "black";
}
