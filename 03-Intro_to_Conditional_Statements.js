'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/* Solution 1

function classifyNumbers(n) {
    if (n%2 === 0 && n >= 2 && n <= 5 || n%2 === 0 && n > 20 ) {
        console.log('Not Weird');
    } else {
        console.log('Weird');
    }
}
*/

//Solution 2
function classifyNumbers(n) {
    if (n%2 === 1) {
        console.log('Weird');
    } else if (n%2 === 0 && n >= 2 && n <= 5) {
        console.log('Not Weird');
    } else if (n%2 === 0 && n >= 6 && n <= 20) {
        console.log('Weird');
    } else if (n%2 === 0 && n > 20) {
        console.log('Not Weird');
    }
}


function main() {
    const N = parseInt(readLine(), 10);
    classifyNumbers(N);
}
