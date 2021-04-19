function processData(input) {
    input = input.split('\n');
    let n = parseInt(input[0]);
    let phoneBook = [];
    
    for (let i = 0; i < n; i++) {
        let line = input[i+1].split(' ');
        phoneBook[line[0]] = line[1];
    }
    
    for (let i = n+1; i < input.length; i++) {
        let phoneNumber = phoneBook[input[i]];
        if (phoneNumber !== undefined) {
            console.log(`${input[i]}=${phoneNumber}`)
        } else {
            console.log('Not found');
        }
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
