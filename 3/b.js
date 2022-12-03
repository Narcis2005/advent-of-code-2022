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
 
    for(let i = 0; i<rucksacks.length; i+=3) {
        for(let j = 0; j<rucksacks[i].length; j++) {

            if(rucksacks[i+1].includes(rucksacks[i][j]) &&rucksacks[i+2].includes(rucksacks[i][j]) ) {
                if(rucksacks[i][j].toUpperCase() === rucksacks[i][j]) {
                    const priorityToAdd = rucksacks[i][j].charCodeAt(0) - "A".charCodeAt(0) + 1 + 26
                    sum += priorityToAdd;
                    break;
                }
                else if(rucksacks[i][j].toLowerCase() === rucksacks[i][j]) {
                    const priorityToAdd = rucksacks[i][j].charCodeAt(0) - "a".charCodeAt(0) + 1;
                    sum += priorityToAdd;
                    break;
                }
            }
        }
    }
    console.log(sum)
 })