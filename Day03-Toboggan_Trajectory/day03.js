
const fs = require('fs');
const path = 'Day03-Toboggan_Trajectory/input.txt';

const t = [
    '..##.........##.........##.........##.........##.........##.......',
    '#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..',
    '.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.',
    '..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#',
    '.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.',
    '..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....',
    '.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#',
    '.#........#.#........#.#........#.#........#.#........#.#........#',
    '#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...',
    '#...##....##...##....##...##....##...##....##...##....##...##....#',
    '.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#'
];

const test = fs.readFileSync(path, 'utf8').split('\n').map(e => e.trim());


function countTree(map, right, down) {
    let [height, width] = [
        map.length, map[0].length
    ];
    // console.log({map, height, width,right,down})
    let tree = 0;
    let x = 0;
    let y = 0;
    map.forEach((m, i) => {
        if(i % down == 0){
            if(map[i][x] == "#")
                tree++;
               // console.log(m,i,x)
        
        x = (right + x) % width;
        }
       
    })
    console.log(tree);
    return tree;
}

// Slope(trajectory) : to right 3, down 1.
// countTree(t,1,2)

/*
--- Part Two ---

Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

    Right 1, down 1.
    Right 3, down 1. (This is the slope you already checked.)
    Right 5, down 1.
    Right 7, down 1.
    Right 1, down 2.

In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered on each of the listed slopes?
*/
const slopes = [
    [
        1, 1
    ],
    [
        3, 1
    ],
    [
        5, 1
    ],
    [
        7, 1
    ],
    [
        1, 2
    ]
]
function countTree_p2(map, slopes) {
    let result = 1;
    slopes.forEach(([x, y]) => {
        let tree = countTree(map, x, y)

        result *= tree;
      //  console.log({tree, result})
    })

    console.log(result)
}

countTree_p2(test, slopes);
