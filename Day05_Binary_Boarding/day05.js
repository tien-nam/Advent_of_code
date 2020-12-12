const FS = require('fs');
const PATH = 'Day05_Binary_Boarding/input.txt';

const test = FS.readFileSync(PATH, 'ascii').split(/\r\n/);


const BOARDING_PASS = ['FBFBBFFRLR', 'BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];

function checkingPass(pass) {
    let highest = 0;
    let seatsID = []
    pass.forEach(boarding => {
        let [rows, seats] = [
            boarding.substr(0, 7),
            boarding.substr(7, 9)
        ];

        let row = getBinary(rows, 'F', 'B');
        let column = getBinary(seats, 'L', 'R');
       
        const seatID = (parseInt(row, 2) * 8) + parseInt(column, 2);
        highest = seatID > highest ? seatID : highest;
        seatsID.push(seatID);
    })
//    console.log(highest)
    return seatsID;
}

function getBinary(pass, low, high) {
    let binary = '';
    for (let ch of pass) {
        binary += (ch == low) ? '0' : '1';
    }
    return binary;
}

function findingYourSeat(seats){
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    seats.sort((a,b) => a - b);

    let fullList = range(seats[0], seats[seats.length - 1], 1);

    for(let seat of seats){
        let index = fullList.indexOf(seat);
        fullList.splice(index,1);
    }
    console.log(fullList);
}

const seats = checkingPass(test);
findingYourSeat(seats);