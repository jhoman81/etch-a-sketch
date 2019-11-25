const container = document.querySelector("#container");

for (var j = 0; j < 16; j++) {
    var gridRow = document.createElement('div');
    gridRow.classList.add("grid-row" + j);
    container.appendChild(gridRow);

    for (var i = 0; i < 16; i++) {
        var gridBlock = document.createElement('div');
        gridBlock.classList.add('grid-block' + i);
        gridRow.appendChild(gridBlock);
    }
}