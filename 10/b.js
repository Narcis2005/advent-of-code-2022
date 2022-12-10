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
    const eachLineArray = input.split(/\r?\n/);
    let cycle = 0;
    let x = 1;
    let valueToAdd = 0;
    let index = 0;
    let sprite = new Array(40).fill(".");
    sprite[0] = "#"
    sprite[1] = "#"
    sprite[2] = "#"
    process.stdout.write(sprite[cycle%40]);
    while(index<eachLineArray.length) {
        if(valueToAdd !== 0) {
            x+= valueToAdd;
            valueToAdd = 0;
            index++;
            sprite = new Array(40).fill(".");
            sprite[x-1] = "#";
            sprite[x] = "#";
            sprite[x+1] = "#";
        }
        else if(eachLineArray[index].split("addx").length === 2 && valueToAdd === 0) {
            valueToAdd = parseInt(eachLineArray[index].split("addx")[1])
        }
        else if(eachLineArray[index].split("addx").length !== 2) {
            index++;
        }
        cycle++;
        process.stdout.write(sprite[cycle%40]);
        if((cycle+1) %40 === 0) {
            process.stdout.write('\n')

        }
    }
})