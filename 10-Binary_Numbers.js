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

//Solution 1
/*function binary(n) {
    let array = [];
    let result = "";
    let counter = 1;
    let max = 1;

    while (n >= 1) {
        if (n % 2 === 1) {
            array.push(1);
        } else {
            array.push(0);
        }
        n = Math.floor(n/2);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            counter++;
            if (counter > max && array[i] === 1) {
                max = counter;
            }
        } else {   
            counter = 1;
        }
    }
    console.log(max);
}*/

//Solution 2
function binary(n) {
    let binaryNumber = '';
    let max = 1;
    
    binaryNumber = n.toString(2);
    //console.log(binaryNumber);
    /*while (n >= 1) {
        if (n % 2 === 1) {
            binaryNumber += 1;
        } else {
            binaryNumber += 0;
        }
        n = Math.floor(n/2);
    }*/
    
    let array = binaryNumber.split('0');
    
    for (let i = 0; i < array.length; i++) {

        if (array[i].length > max) {
            max = array[i].length;
        }
    }
    console.log(max);
}


function main() {
    let n = parseInt(readLine(), 10);
    binary(n);
}
