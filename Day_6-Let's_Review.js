function processData(input) {
    //Enter your code here

    let message = input.split('\n');
    
    for (let i = 1; i < (parseInt(message[0])+1); i++) {
        let leftL = '';
        let rightL = '';
        for (let j = 0; j < message[i].length; j++) {
            if (j % 2 === 0) {
                leftL = leftL + message[i][j];
            } else {
                rightL = rightL + message[i][j];
            }
        }
        console.log(`${leftL} ${rightL}`);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});