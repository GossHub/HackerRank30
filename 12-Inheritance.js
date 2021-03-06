'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, idNumber, testScores) {
        super(firstName, lastName, idNumber);
        this.testScores = testScores;
    }
    calculate() {
        let sum = 0;
        let grade = '';
        
        for (let i = 0; i < this.testScores.length; i++) {
            sum += this.testScores[i];
        }

        let average = sum / this.testScores.length;

        switch (true) {
            case (average >= 90):
                grade = 'O';
                break;
            case (average >= 80):
                grade = 'E';
                break;
            case (average >= 70):
                grade = 'A';
                break;
            case (average >= 55):
                grade = 'P';
                break;
            case (average >= 40):
                grade = 'D';
                break;
            default:
                grade = 'T';
                break;
        }

        //if statement instead of switch

        /*if (average >= 90 && average <= 100) {
            grade = 'O';
        } else if (average >= 80 && average < 90) {
            grade = 'E';
        } else if (average >= 70 && average < 80) {
            grade = 'A';
        } else if (average >= 55 && average < 70) {
            grade = 'P';
        } else if (average >= 40 && average < 55) {
            grade = 'D';
        } else {
            grade = 'T';
        }*/
        
        return grade;
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}