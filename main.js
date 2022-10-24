// Color Stuff
let boardColor = 'black';
let inactiveColor = '#303030';
let activeColor = 'white';

// Create Board
let rows = 12;
let columns = 13;
let border = 0;


let letters = [
//  0    1     2    3    4    5    6    7    8    9   10   11   12    
    '\u00B7',  '',  '', '', '', '', '', '', '', '', '', '', '\u00B7',

//  13   14   15   16   17   18   19   20   21   22   23   24   25
    '', 'E',  'S', 'K', 'I', 'S', 'T', 'A', 'F', 'Ü', 'N', 'F', '',

//  26   27   28   29   30   31   32   33   34   35   36   37   38
    '',  'Z', 'E', 'H', 'N', 'Z', 'W', 'A', 'N', 'Z', 'I', 'G', '',

//  39   40   41    42   43   44   45   46   47   48   49   50   51
    '',  'D', 'R', 'E', 'I', 'V', 'I', 'E', 'R', 'T', 'E', 'L', '',

//  52   53   54    55   56   57  58   59   60   61   62    63  64
    '',  'V', 'O', 'R', 'F', 'U', 'N', 'K', 'N', 'A', 'C', 'H', '',

//  65   66   67   68   69   70   71   72   73   74   75   76   77
    '',  'H', 'A', 'L', 'B', 'A', 'E', 'L', 'F', 'Ü', 'N', 'F', '',

//  78   79   80   81   82   83   84   85   86   87   88   89   90
    '',  'E', 'I', 'N', 'S', 'X', 'Ä', 'M', 'Z', 'W', 'E', 'I', '',

//  91   92   93   94   95   96   97   98   99   100  101  102  103
    '',  'D', 'R', 'E', 'I', 'P', 'M', 'J', 'V', 'I', 'E', 'R', '',

//  104  105  106  107  108  109  110  111  112  113  114  115  116  
    '',  'S', 'E', 'C', 'H', 'S', 'N', 'L', 'A', 'C', 'H', 'T', '',

//  117  118  119  120  121  122  123  124  125  126  127  128  129  
    '',  'S', 'I', 'E', 'B', 'E', 'N', 'Z', 'W', 'Ö', 'L', 'F', '',

//  130  131  132  133  134  135  136  137  138  139  140  141  142
    '',  'Z', 'E', 'H', 'N', 'E', 'U', 'N', 'K', 'U', 'H', 'R', ''
//  143  144  145  146  147  148  149  150  151  152  153  154  155
    ,'\u00B7', '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '',  '\u00B7'
];

createBoard();
addParagraphs();
addLetters();

function createBoard() {
    document.getElementById('Board').innerHTML = '';
    document.getElementById('Board').style.width=(columns*(52))+'px';
    document.getElementById('Board').style.height=(rows*(52))+'px';
    for (let i=0; i<(rows*columns); i++) {
        let a = document.getElementById('Board').appendChild(document.createElement('div'));
        a.setAttribute('id', 'field' + i);
        a.style.backgroundColor = boardColor;
        //a.style.border = border +"px solid #00000000";;
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
var word_ES = ['p14', 'p15'];
let word_IST = ['p17', 'p18', 'p19'];
let word_FÜNF = ['p21', 'p22', 'p23', 'p24'];
let word_ZEHN = ['p27', 'p28', 'p29', 'p30'];
let word_ZWANZIG = ['p31', 'p32', 'p33', 'p34', 'p35', 'p36', 'p37'];
let word_VIERTEL = ['p44', 'p45', 'p46','p47', 'p48', 'p49', 'p50'];
let word_DREIVIERTEL = ['p40', 'p41', 'p42', 'p43', 'p44', 'p45', 'p46','p47', 'p48', 'p49', 'p50'];
let word_VOR = ['p53', 'p54', 'p55'];
let word_NACH = ['p60','p61','p62','p63'];
let word_HALB = ['p66', 'p67', 'p68', 'p69'];
let word_ELF = ['p71','p72','p73'];
let word_FÜNF2 = ['p73','p74','p75', 'p76'];
let word_EIN = ['p79', 'p80', 'p81'];
let word_EINS = ['p79', 'p80', 'p81', 'p82'];
let word_ZWEI = ['p86','p87','p88','p89'];
let word_DREI = ['p92','p93','p94','p95'];
let word_VIER = ['p99', 'p100', 'p101', 'p102'];
let word_SECHS = ['p105', 'p106', 'p107', 'p108', 'p109'];
let word_ACHT = ['p112', 'p113', 'p114', 'p115'];
let word_SIEBEN = ['p118', 'p119', 'p120', 'p121', 'p122', 'p123'];
let word_ZWÖLF = ['p124', 'p125', 'p126', 'p127', 'p128'];
let word_ZEHN2 = ['p131', 'p132', 'p133', 'p134'];
let word_NEUN = ['p134','p135','p136','p137']; 
let word_UHR = ['p139', 'p140', 'p141'];

////////////////////////////////////////////////////////////////////////////////////////////////////
// CODE NUMBERS
////////////////////////////////////////////////////////////////////////////////////////////////////
/*let number_X_ = [   'p33',  'p34',  'p35',  'p36',  'p37',
                    'p46',  'p47',  'p48',  'p49',  'p50',
                    'p59',  'p60',  'p61',  'p62',  'p63',
                    'p72',  'p73',  'p74',  'p75',  'p76',
                    'p85',  'p86',  'p87',  'p88',  'p89',
                    'p98',  'p99',  'p100', 'p101', 'p102',
                    'p111', 'p112', 'p113', 'p114', 'p115'
];*/

let number_X0 = [           'p34',  'p35',  'p36',
                    'p46',                          'p50',
                    'p59',                   'p62', 'p63',
                    'p72',          'p74',          'p76',
                    'p85',  'p86',                  'p89',
                    'p98',                         'p102',
                            'p112', 'p113', 'p114',
];

let number_X1 = [           'p35',
                    'p47',  'p48',
                            'p61',
                            'p74',
                            'p87', 
                            'p100',
                    'p112', 'p113', 'p114'
];

let number_X2 = [           'p34',  'p35',  'p36',
                    'p46',                          'p50',
                                                    'p63',
                                            'p75',
                                    'p87',
                            'p99', 
                    'p111', 'p112', 'p113', 'p114', 'p115'
];

let number_X3 = [   'p33',  'p34',  'p35',  'p36',  'p37',
                                            'p49',  
                                    'p61', 
                                            'p75',
                                                    'p89',
                    'p98',                          'p102',
                            'p112', 'p113', 'p114'
];

let number_X4 = [                           'p36',
                                    'p48',  'p49',
                            'p60',          'p62',
                    'p72',                  'p75',
                    'p85',  'p86',  'p87',  'p88',  'p89',
                                            'p101',
                                            'p114',
];

let number_X5 = [   'p33',  'p34',  'p35',  'p36',  'p37',
                    'p46',
                    'p59',  'p60',  'p61',  'p62',
                                                    'p76',
                                                    'p89',
                    'p98',                          'p102',
                            'p112', 'p113', 'p114'
];

let number_X6 = [                   'p35',  'p36',
                            'p47',
                    'p59',  
                    'p72',  'p73',  'p74',  'p75',
                    'p85',                          'p89',
                    'p98',                          'p102',
                            'p112', 'p113', 'p114',
];

let number_X7 = [   'p33',  'p34',  'p35',  'p36',  'p37',
                                                    'p50',
                                            'p62',  
                                    'p74',
                            'p86',
                            'p99',
                            'p112',
];

let number_X8 = [           'p34',  'p35',  'p36',
                    'p46',                          'p50',
                    'p59',                          'p63',
                            'p73',  'p74',  'p75',
                    'p85',                          'p89',
                    'p98',                          'p102',
                            'p112', 'p113', 'p114',
];

let number_X9 = [           'p34',  'p35',  'p36',  
                    'p46',                          'p50',
                    'p59',                          'p63',
                            'p73',  'p74',  'p75',  'p76',
                                                    'p89',
                                            'p101',
                            'p112', 'p113', 
];
//////////////////////////////////////////////////////////
let number_0X = [           'p28',  'p29',  'p30',
                    'p40',                          'p44',
                    'p53',                   'p56', 'p57',
                    'p66',          'p68',          'p70',
                    'p79',  'p80',                  'p83',
                    'p92',                          'p96',
                            'p106', 'p107', 'p108',
];

let number_1X = [           'p29',
                    'p41',  'p42',
                            'p55',
                            'p68',
                            'p81', 
                            'p94',
                    'p106', 'p107', 'p108'
];

let number_2X = [           'p28',  'p29',  'p30',
                    'p40',                          'p44',
                                                    'p57',
                                            'p69',
                                    'p81',
                            'p93', 
                    'p105', 'p106', 'p107', 'p108', 'p109'
];

let number_3X = [   'p27',  'p28',  'p29',  'p30',  'p31',
                                            'p43',  
                                    'p55', 
                                            'p69',
                                                    'p83',
                    'p92',                          'p96',
                            'p106', 'p107', 'p108'
];

let number_4X = [                           'p30',
                                    'p42',  'p43',
                            'p54',          'p56',
                    'p66',                  'p69',
                    'p79',  'p80',  'p81',  'p82',  'p83',
                                            'p95',
                                            'p108',
];

let number_5X = [   'p27',  'p28',  'p29',  'p30',  'p31',
                    'p40',
                    'p53',  'p54',  'p55',  'p56',
                                                    'p70',
                                                    'p83',
                    'p92',                          'p96',
                            'p106', 'p107', 'p108'
];

let number_6X = [                   'p29',  'p30',
                            'p41',
                    'p53',  
                    'p66',  'p67',  'p68',  'p69',
                    'p79',                          'p83',
                    'p92',                          'p96',
                            'p106', 'p107', 'p108',
];

let number_7X = [   'p27',  'p28',  'p29',  'p30',  'p31',
                                                    'p44',
                                            'p56',  
                                    'p68',
                            'p80',
                            'p93',
                            'p106',
];

let number_8X = [           'p28',  'p29',  'p30',
                    'p40',                          'p44',
                    'p53',                          'p57',
                            'p67',  'p68',  'p69',
                    'p79',                          'p83',
                    'p92',                          'p96',
                            'p106', 'p107', 'p108',
];

let number_9X = [           'p28',  'p29',  'p30',  
                    'p40',                          'p44',
                    'p53',                          'p57',
                            'p67',  'p68',  'p69',  'p70',
                                                    'p83',
                                            'p95',
                            'p106', 'p107', 
];


////////////////////////////////////////////////////////////////////////////////////////////////////
// LOGIC
////////////////////////////////////////////////////////////////////////////////////////////////////

//setInterval(updateBoardColor, 1000);
setInterval(updateBoardColorSeconds, 1000);


function clearBoardColor() {
    for(let i = 0; i< (rows*columns); i++){
        document.getElementById('p'+i).style.color = inactiveColor;
    }
}

function updateBoardColor() {
    clearBoardColor();
    var active = [];

    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    
    active = active = active.concat(word_ES).concat(word_IST);

    if (!isInArray(m, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,20,21,22,23,24])){
        h++;
    }

    //set HOUR
    switch(h) {
        case 0:
        case 12:
        case 24:
            active = active.concat(word_ZWÖLF);
            break;
        case 1:
        case 13:
            if(isInArray(m, [0,1,2,3,4])){
                active = active.concat(word_EIN);
            } else {
                active = active.concat(word_EINS);
            }
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

    if(isInArray(m, [0,1,2,3,4])) {   
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
        active = active.concat(word_DREIVIERTEL);
    } else if (isInArray(m, [50,51,52,53,54])) {
        active = active.concat(word_ZEHN).concat(word_VOR);
    } else if (isInArray(m, [55,56,57,58,59])) {
        active = active.concat(word_FÜNF).concat(word_VOR);
    } else {
        alert('Zeitfehler');
    }

    // set minute-points


    if(m%5 == 1) {
        active = active.concat('p0');
    } else if(m%5 == 2) {
        active = active.concat(['p0','p12']);
    } else if(m%5 == 3) {
        active = active.concat(['p0','p12', 'p143']);
    } else if(m%5 == 4) {
        active = active.concat(['p0','p12', 'p143', 'p155']);
    } else {
        actice = active.concat([]);
    }

    for(let i = 0; i< active.length; i++){
        document.getElementById(active[i]).style.color = activeColor;
    }
}
////////////////////////////////////

function updateBoardColorSeconds() {
    clearBoardColor();
    var active = [];

    const d = new Date();
    let seconds = d.getSeconds(); //actual second


    let a = seconds%10;
    // X_
    switch(a) {
        case 0: active = active.concat(number_X0); 
        break;
        case 1: active = active.concat(number_X1);
        break;
        case 2: active = active.concat(number_X2);
        break;
        case 3: active = active.concat(number_X3);
        break;
        case 4: active = active.concat(number_X4);
        break; 
        case 5: active = active.concat(number_X5);
        break; 
        case 6: active = active.concat(number_X6);
        break; 
        case 7: active = active.concat(number_X7);
        break; 
        case 8: active = active.concat(number_X8);
        break; 
        case 9: active = active.concat(number_X9);
        break; 
    }

    switch(Math.floor(seconds/10)) {
        case 0: active = active.concat(number_0X); 
        break;
        case 1: active = active.concat(number_1X);
        break;
        case 2: active = active.concat(number_2X);
        break;
        case 3: active = active.concat(number_3X);
        break;
        case 4: active = active.concat(number_4X);
        break; 
        case 5: active = active.concat(number_5X);
        break; 
        case 6: active = active.concat(number_6X);
        break; 
        case 7: active = active.concat(number_7X);
        break; 
        case 8: active = active.concat(number_8X);
        break; 
        case 9: active = active.concat(number_9X);
        break; 
    }
    for(let i = 0; i< active.length; i++){
        document.getElementById(active[i]).style.color = activeColor;
    }
}



// HELPER
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}