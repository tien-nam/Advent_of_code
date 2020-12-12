const sample = [  "abc","a b c","ab ac","a a a a","b"];
const FS = require('fs');
const PATH = 'Day06_Custom_customs/input.txt';

const input = getInput(PATH);
function getInput(PATH){
    return FS.readFileSync(PATH, 'utf-8').replace(/\r\n/g," ").split(/\s\s/g);
}


function part_1(test){
    let count = [];
    test.forEach(t => {
        t = new Set(t.split(" ").join(''));
        count.push([...t].length);    
    })
    return count.reduce((acc,val ) => acc+= val);
}

function part_2(test){
    let count = [];
    test.forEach(t => {
        t = t.split(/\s/)
        if(t.length === 1){
            count.push(t[0].length);
        }else {
            let set1 = new Set(t[0]);
            for(let i = 1; i < t.length;i++){
                let set2 = new Set(t[i]);
                 set1 = new Set([...set2].filter(x => set1.has(x)));
            }
            count.push([...set1].length)
        }
        
    })
    return  count.reduce((acc,val) => acc+val,0)
}




console.log(part_1(input));
console.log(part_2(input));
//console.log(input)
