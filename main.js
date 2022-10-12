let rows = 5;
let columns = 5;
let border = 1;

//draw 5x5 Board (default)
document.getElementById('rowsAmount').innerHTML = rows;
document.getElementById('columnsAmount').innerHTML = columns;

createBoard();

document.getElementById('heightRange').onchange = function() {
    rows = this.value;
    document.getElementById('rowsAmount').innerHTML = this.value;
}

document.getElementById('widthRange').onchange = function() {
    columns = this.value;
    document.getElementById('columnsAmount').innerHTML = this.value;
}


function createBoard() {
    document.getElementById('Board').innerHTML = '';
    document.getElementById('Board').style.width=(columns*(52+2))+'px';
    for (let i=0; i<(rows*columns); i++) {
        let a = document.getElementById('Board').appendChild(document.createElement('div'));
        a.setAttribute('id', 'field' + i);
        a.style.backgroundColor = 'blue';
        a.style.border = border +"px solid #000000";;
        a.setAttribute('class', 'field');
    };
}