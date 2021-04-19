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

function hourGlass(arr) {
    let sum = 0;
    let max = -99999;

    for (let j=0;j<4;j++) {
        for (let i=0; i<4;i++) {
            sum =  arr[j][i] + arr[j][i+1] + arr[j][i+2];
            sum += arr[j+1][i+1];
            sum += arr[j+2][i] + arr[j+2][i+1] + arr[j+2][i+2];
            
            if (sum > max) {
                max = sum;
            }
        
        }        
    }
    console.log(max);
}

function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    hourGlass(arr);
}