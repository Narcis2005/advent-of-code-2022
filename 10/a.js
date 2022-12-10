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
    let cycle = 1;
    let x = 1;
    let valueToAdd = 0;
    let index = 0;
    let sum = 0;
    while(index<eachLineArray.length) {
        if(valueToAdd !== 0) {
            x+= valueToAdd;
            valueToAdd = 0;
            index++;
        }
        else if(eachLineArray[index].split("addx").length === 2 && valueToAdd === 0) {
            valueToAdd = parseInt(eachLineArray[index].split("addx")[1])
        }
        else if(eachLineArray[index].split("addx").length !== 2) {
            index++;
        }
            cycle++;
            if(cycle === 20) {
                sum+=cycle*x;
            }
            else if((cycle -20) %40 === 0) {
                sum+=cycle*x;

            }
    }
    console.log(sum)
})