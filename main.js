// Create Board
let rows = 10;
let columns = 11;
let border = 1;

let letters = [
//  0     1    2    3    4    5    6    7    8    9   10
    'E', 'S', 'K', 'I', 'S', 'T', 'A', 'F', 'Ü', 'N', 'F',
//  11   12   13   14   15   16   17   18   19   20   21
    'Z', 'E', 'H', 'N', 'Z', 'W', 'A', 'N', 'Z', 'I', 'G',
//  22   23   24   25   26   27   28   29   30   31   32
    'D', 'R', 'E', 'I', 'V', 'I', 'E', 'R', 'T', 'E', 'L',
//  33   34   35   36   37   38   39   40   41   42   43
    'V', 'O', 'R', 'F', 'U', 'N', 'K', 'N', 'A', 'C', 'H',
//  44   45   46   47   48   49   50   51   52   53   54
    'H', 'A', 'L', 'B', 'A', 'E', 'L', 'F', 'Ü', 'N', 'F',
//  55   56   57   58   59   60   61   62   63   64   65
    'E', 'I', 'N', 'S', 'X', 'Ä', 'M', 'Z', 'W', 'E', 'I',
//  66   67   68   69   70   71   72   73   74   75   76
    'D', 'R', 'E', 'I', 'P', 'M', 'J', 'V', 'I', 'E', 'R',
//  77   78   79   80   81   82   83   84   85   86   87
    'S', 'E', 'C', 'H', 'S', 'N', 'L', 'A', 'C', 'H', 'T',
//  88   89   90   91   92   93   94   95   96   97   98
    'S', 'I', 'E', 'B', 'E', 'N', 'Z', 'W', 'Ö', 'L', 'F',
//  99   100  101  102  103  104  105  106  107  108  109
    'Z', 'E', 'H', 'N', 'E', 'U', 'N', 'K', 'U', 'H', 'R'
];

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
        a.style.border = border +"px solid #00000000";;
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

////////////////////////////////////////////////////////////////////////////////////////////////////
// CODE WORDS
////////////////////////////////////////////////////////////////////////////////////////////////////
var word_ES = ['p0', 'p1'];
let word_IST = ['p3', 'p4', 'p5'];
let word_FÜNF = ['p7', 'p8', 'p9', 'p10'];
let word_ZEHN = ['p11', 'p12', 'p13', 'p14'];
let word_ZWANZIG = ['p15', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21'];
let word_VIERTEL = ['p26', 'p27', 'p28','p29', 'p30', 'p31', 'p32'];
let word_DREIVIERTEL = ['p22', 'p23', 'p24', 'p25', 'p26', 'p27', 'p28','p29', 'p30', 'p31', 'p32'];
let word_VOR = ['p33', 'p34', 'p35'];
let word_NACH = ['p40','p41','p42','p43'];
let word_HALB = ['p44', 'p45', 'p46', 'p47'];
let word_ELF = ['p49','p50','p51'];
let word_FÜNF2 = ['p51','p52','p53', 'p54'];
let word_EIN = ['p55', 'p56', 'p57'];
let word_EINS = ['p55', 'p56', 'p57', 'p58'];
let word_ZWEI = ['p62','p63','p64','p65'];
let word_DREI = ['p66','p67','p68','p69'];
let word_VIER = ['p73', 'p74', 'p75', 'p76'];
let word_SECHS = ['p77', 'p78', 'p79', 'p80', 'p81'];
let word_ACHT = ['p84', 'p85', 'p86', 'p87'];
let word_SIEBEN = ['p88', 'p89', 'p90', 'p91', 'p92', 'p93'];
let word_ZWÖLF = ['p94', 'p95', 'p96', 'p97', 'p98'];
let word_ZEHN2 = ['p99', 'p100', 'p101', 'p102'];
let word_NEUN = ['p102','p103','p104','p105']; 
let word_UHR = ['p107', 'p108', 'p109'];

////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGIC
////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(updateBoardColor, 1000); //

function clearBoardColor() {
    for(let i = 0; i< (rows*columns); i++){
        document.getElementById('p'+i).style.color = '#303030';
    }
};

function updateBoardColor() {
    clearBoardColor();
    var active = [];

    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    
    active = active = active.concat(word_ES).concat(word_IST);

    //set HOUR
    switch(h) {
        case 0:
        case 12:
        case 24:
            active = active.concat(word_ZWÖLF);
            break;
        case 1:
        case 13:
            active = active.concat(word_EIN);
            break;
        case 2:
        case 14:
            active = active.concat(word_ZWEI);
            break;
        case 3:
        case 15:
            active = active.concat(word_DREI);
            break;
        case 4:
        case 16:
            active = active.concat(word_VIER);
            break;
        case 5:
        case 17:
            active = active.concat(word_FÜNF2);
            break;
        case 6:
        case 18:
            active = active.concat(word_SECHS);
            break;
        case 7:
        case 19:
            active = active.concat(word_SIEBEN);
            break;
        case 8:
        case 20:
            active = active.concat(word_ACHT);
            break;
        case 9:
        case 21:
            active = active.concat(word_NEUN);
            break;
        case 10:
        case 22:
            active = active.concat(word_ZEHN2);
            break;
        case 11:
        case 23:
            active = active.concat(word_ELF);
            break;
    }
    //set MINUTE

    if(m == 0) {   
        active = active.concat(word_UHR);
    } else if (isInArray(m, [5,6,7,8,9])) {
        active = active.concat(word_FÜNF).concat(word_NACH);
    } else if (isInArray(m, [10,11,12,13,14])) {
        active = active.concat(word_ZEHN).concat(word_NACH);
    } else if (isInArray(m, [15,16,17,18,19])) {
        active = active.concat(word_VIERTEL);
    } else if (isInArray(m, [20,21,22,23,24])) {
        active = active.concat(word_ZWANZIG).concat(word_NACH);
    } else if (isInArray(m, [25,26,27,28,29])) {
        active = active.concat(word_FÜNF).concat(word_VOR).concat(word_HALB);
    } else if (isInArray(m, [30,31,32,33,34])) {
        active = active.concat(word_HALB);
    } else if (isInArray(m, [35,36,37,38,39])) {
        active = active.concat(word_FÜNF).concat(word_NACH).concat(word_HALB);
    } else if (isInArray(m, [40,41,42,43,44])) {
        active = active.concat(word_ZWANZIG).concat(word_VOR);
    } else if (isInArray(m, [45,46,47,48,49])) {
        active = active.concat(word_ZEHN).concat(word_VOR);
    } else if (isInArray(m, [50,51,52,53,54])) {
        active = active.concat(word_ZEHN).concat(word_VOR);
    } else if (isInArray(m, [55,56,57,58,59])) {
        active = active.concat(word_FÜNF).concat(word_VOR);
    } else {
        alert('Zeitfehler');
    }
    for(let i = 0; i< active.length; i++){
        document.getElementById(active[i]).style.color = 'white';
    }
}


// HELPER
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}