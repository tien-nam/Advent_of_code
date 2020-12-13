const FS = require('fs');
const PATH = 'Day07_Handy_Haversacks/input_d7.txt';

const INPUT = FS.readFileSync(PATH, 'utf-8');


const processData = (input) => {
    return new Map(input.split(/\r\n/).map(line => {
        let [key, value] = line.replace(/( bags?)/g, '').split(' contain');
        value = new Map(value.replace('.', '').split(', ').map(val => {
            let [n, color] = val.trim().replace(/\s(?=\w+\s\w)/, '  ').split(/\s\s/)
            return [color, n];
        }))
        return [key, value];
    }))
}


const text = `light red bags contain 1 bright white bag, 2 muted yellow bags.\r
dark orange bags contain 3 bright white bags, 4 muted yellow bags.\r
bright white bags contain 1 shiny gold bag.\r
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\r
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\r
dark olive bags contain 3 faded blue bags, 4 dotted black bags.\r
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\r
faded blue bags contain no other bags.\r
dotted black bags contain no other bags.`

let data = processData(INPUT);

function part_1(data) {
    const lookupMap = (data, keyword, record, index) => {
        for (let [key, values] of data.entries()) {
            if (values.has(keyword) && !record.includes(key)) {
                record.push(key);
            }
        }
        index ++;
        return [record[index], record, index];
    };


    let [keyword, record, idx] = lookupMap(data, 'shiny gold', [], 0);
    idx = 0;
    while (idx < record.length) {
        [keyword, record, idx] = lookupMap(data, record[idx], record, idx);
    }
    console.log({record, len: record.length})
}


function part_2(data) {
    const searchBags = (data, bags, record) => {
        for (let bag of bags) {
            for (let [key, values] of data.entries()) {
                if (key == bag[0]) {
                    record[bag] = [...values];
                }
            }
        }
        console.log(record);
        return [bags,]
    };

    const bags = Array.from(data.get('shiny gold'));
    console.log(bags)
   // searchBags(data, bags, {});

    console.log(Array.from(data.get('shiny gold')))

    // while(bag != 'undefined'){

    // }
    // console.log(a)
}
part_1(data);
