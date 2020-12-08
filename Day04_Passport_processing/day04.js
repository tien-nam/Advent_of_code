const t = [
    {
        ecl: 'gry',
        pid: '860033327',
        eyr: 2020,
        hcl: '#fffffd',
        byr: 1937,
        iyr: 2017,
        cid: '147',
        hgt: '183cm'
    }, {
        iyr: 2013,
        ecl: 'amb',
        cid: 350,
        eyr: 2023,
        pid: '028048884',
        hcl: '#cfa07d',
        byr: 1929
    }, {
        hcl: '#ae17e1',
        iyr: 2013,
        eyr: 2024,
        ecl: 'brn',
        pid: '760753108',
        byr: 1931,
        hgt: '179cm'
    }, {
        hcl: '#cfa07d',
        eyr: 2025,
        pid: '166559648',
        iyr: 2011,
        ecl: 'brn',
        hgt: '59in'
    }
]

/*
byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)
*/

const FS = require('fs');
const PATH = 'Day04_Passport_processing/input.txt';


function prepData(path) {
    let obj = [];
    let temp = {};

    let a = FS.readFileSync(path, 'utf8').replace(/\r\n/g, ' ').split(/\s\s/);
    a.forEach(b => {
        b.split(' ').forEach(c => {
            const [k, v] = c.split(':');
            temp[k] = v;
        })
        obj.push(temp);
        temp = {};
    })
    return obj;
}

let test = prepData(PATH);
// console.log(test);
function checkPassport_part1(passports) {
    let valid = passports.filter(p => {
        return(Object.keys(p).length == 7 && !Object.keys(p).includes('cid')) || (Object.keys(p).length > 7);
    })
    return valid;
}


/*
byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
    If cm, the number must be at least 150 and at most 193.
    If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
*/


function checkPassport_part2(valid) {
    valid = valid.filter(passport => {
        return checkBirthday(passport) && 
        checkIssueYear(passport) && 
        checkExpirationYear(passport) && 
        checkHeight(passport) && 
        checkHairColor(passport) &&
        checkEyeColor(passport) &&
        checkPID(passport);
    })
    console.log(valid.length);
}

function checkBirthday(passport) {
    return parseInt(passport.byr) <= 2002 && parseInt(passport.byr) >= 1920;
}

function checkIssueYear(passport) {
    return parseInt(passport.iyr) <= 2020 && parseInt(passport.iyr) >= 2010;
}

function checkExpirationYear(passport) {
    return parseInt(passport.eyr) <= 2030 && parseInt(passport.eyr) >= 2010;
}

function checkHeight(passport) {
    let height = passport.hgt;

    if (height.includes('cm')) {
        return parseInt(height) >= 150 && parseInt(height) <= 193;
    } else if (height.includes('in')) {
        return parseInt(height) >= 59 && parseInt(height) <= 76;
    } else {
        return false;
    }
}

function checkHairColor(passport) {
    let color = passport.hcl;
    return(color[0] == '#') && (color.slice(1, color.length).length == 6);

}

function checkEyeColor(passport){
    const COLORS = ['amb','blu','brn','gry','grn','hzl','oth'];
    return COLORS.includes(passport.ecl);
}

function checkPID(passport){
    return passport.pid.length === 9;
}

let validPassports = checkPassport_part1(test);
checkPassport_part2(validPassports);

