const { count } = require("console")

function countVowelConsonant(str) {
    // write code here
    const vowels = ['a','o' ,'u','i','e'];
    str = str.toLowerCase();
    return  str.split('').reduce((acc,char) => {
        return vowels.includes(char) ? acc + 1: acc + 2;
    },0);
  }


countVowelConsonant('abcde');