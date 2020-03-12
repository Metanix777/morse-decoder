const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str ="", res="", el;
    for (let i=0; i<expr.length;i+=10){
        str += expr.slice(i,i+10) + " ";
    }
    res += str.split(" ").map(n =>{
        let str2 ="";
        if (n == "**********") {return " ";} else {
            for (let j=0; j<n.length; j+=2){
                str2 += (n.slice(j,j+2)=="10")? ".": (n.slice(j,j+2)=="11")? "-": "";   
            }
            el = MORSE_TABLE[str2];
            return el;
        }   
    }).join("");
    return res;
}

module.exports = {
    decode
}