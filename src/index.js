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
    let arr = [];
    let clean = '';
    let finalArr = '';
    for (let i = 0; i <= expr.length; i++) {
      if (i % 10 === 0 && i !== 0) {
        if (expr.substring(i - 10, i) === '**********') {
          clean = clean + '**'
        } else {
          clean = clean + ' ' + (expr.substring(i - 10, i) * 1) + ' '
        }
      }
    }
    clean = clean.split(' ')
    clean.forEach(r => {
      let count = ''
      for (let i = 0; i <= r.length; i++) {
        if (i % 2 === 0 && i !== 0) {
          if (r.substring(i - 2, i) === '10') {
            count = count + '.'
          } else if (r.substring(i - 2, i) === '11') {
            count = count + '-'
          } else if (r.substring(i - 2, i) === '**') {
            count = count + '*'
          }
        }
      }
      arr.push(count)
    })
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i] !== '*') {
        finalArr = finalArr + MORSE_TABLE[arr[i]]
      } else if (arr[i] === '*') {
        finalArr = finalArr + ' '
      }
    }
    return finalArr
  }

module.exports = {
    decode
}
