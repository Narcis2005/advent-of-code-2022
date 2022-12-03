var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

readModuleFile('./input.txt', function (err, input) { 
    let sum = 0;
    const rucksacks = input.split(/\r?\n/);
    const splittedRucksacks = rucksacks.map(rucksack => {
        return [rucksack.substr(0, rucksack.length/2), rucksack.substr(rucksack.length / 2, rucksack.length)]
    })
    for(let i = 0; i<splittedRucksacks.length; i++) {
        for(let j = 0; j<splittedRucksacks[i][0].length; j++) {
            if(splittedRucksacks[i][1].includes(splittedRucksacks[i][0][j])) {
                if(splittedRucksacks[i][0][j].toUpperCase() === splittedRucksacks[i][0][j]) {
                    const priorityToAdd = splittedRucksacks[i][0][j].charCodeAt(0) - "A".charCodeAt(0) + 1 + 26
                    sum += priorityToAdd;
                    break;
                }
                else if(splittedRucksacks[i][0][j].toLowerCase() === splittedRucksacks[i][0][j]) {
                    const priorityToAdd = splittedRucksacks[i][0][j].charCodeAt(0) - "a".charCodeAt(0) + 1;
                    sum += priorityToAdd;
                    break;
                }
            }
        }
    }
    console.log(sum)
 })