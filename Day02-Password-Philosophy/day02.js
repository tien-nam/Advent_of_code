const t = [
    [
        '1 3 a', 'abcde'
    ],
    [
        '1 3 b', 'cdefg'
    ],
    [
        '2 9 c', 'ccccccccc'
    ]
];



// Requiring fs module in which
// readFile function is defined.
const fs = require('fs');
const path = 'Day02-Password-Philosophy/input.txt';

function processData(data) {
    let regex = /[^a-zA-Z0-9]/g
    return data.toString().split('\n').map(line => line.replace(regex, ' ').trim("\s").split('  '));
}

let data = fs.readFileSync(path, 'utf8') // synchronous function
let t1 = processData(data);


function checkPassword(file) {
    let valid = 0;

    file.forEach(line => {
        let [min, max, char] = line[0].split(" ");
        let password = line[1];

        // with dynamic variable, constructor of ReExp must have been used
        const regex = new RegExp(char, 'g');
        let replace = password.replace(regex, '');
        // Compare before and after replacing character with empty.
        let diff = password.length - replace.length;
        if (min <= diff && diff <= max) 
            valid++;
        

    })
    console.log(valid)
}


//checkPassword(t1)
/*
Each policy actually describes two positions in the password, 
where 1 means the first character, 2 means the second character, and so on.
 (Be careful; Toboggan Corporate Policies have no concept of "index zero"!)
  Exactly one of these positions must contain the given letter.
   Other occurrences of the letter are irrelevant for the purposes of policy enforcement.
   */

   function checkPassword_part2(file) {
    let valid = 0;

    file.forEach(line => {
        let [min, max, char] = line[0].split(" ");
        let password = line[1].split('');
       
        
        let first =  password[min - 1] == char// password.includes(char,min - 1)
        let second = password[max - 1] == char//password.includes(char,max - 1)
    
        if (first != second) {
            valid++;
        } 
        
    })
    console.log(valid)
   }

checkPassword_part2(t1);