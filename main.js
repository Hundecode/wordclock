let rows = 11;
let columns = 10;
let border = 1;

let letters = [
    'E', 'S', 'K', 'I', 'S', 'T', 'A', 'F', 'Ü', 'N', 'F',
    'Z', 'E', 'H', 'N', 'Z', 'W', 'A', 'N', 'Z', 'I', 'G',
    'D', 'R', 'E', 'I', 'V', 'I', 'E', 'R', 'T', 'E', 'L',
    'V', 'O', 'R', 'F', 'U', 'N', 'K', 'N', 'A', 'C', 'H',
    'H', 'A', 'L', 'B', 'A', 'E', 'L', 'F', 'Ü', 'N', 'F',
    'E', 'I', 'N', 'S', 'X', 'Ä', 'M', 'Z', 'W', 'E', 'I',
    'D', 'R', 'E', 'I', 'P', 'M', 'J', 'V', 'I', 'E', 'R',
    'S', 'E', 'C', 'H', 'S', 'N', 'L', 'A', 'C', 'H', 'T',
    'S', 'I', 'E', 'B', 'E', 'N', 'Z', 'W', 'Ö', 'L', 'F',
    'Z', 'E', 'H', 'N', 'E', 'U', 'N', 'K', 'U', 'H', 'R'
]

createBoard();
addParagraphs();
addLetters();

function createBoard() {
    document.getElementById('Board').innerHTML = '';
    document.getElementById('Board').style.width=(columns*(52+2))+'px';
    for (let i=0; i<(rows*columns); i++) {
        let a = document.getElementById('Board').appendChild(document.createElement('div'));
        a.setAttribute('id', 'field' + i);
        a.style.backgroundColor = 'black';
        a.style.border = border +"px solid #FFFFFF";;
        a.setAttribute('class', 'field');
    };
}

function addParagraphs() {
    for (let i=0; i<(rows*columns); i++) {
        let f = document.getElementById('field'+i).appendChild(document.createElement('p'));
        f.setAttribute('id', 'p'+i);
        f.setAttribute('class', 'letter');
    };
}

function addLetters() {
    for (let i=0; i<(rows*columns); i++) {
        document.getElementById('p'+i).innerHTML = letters[i];
    };
}
