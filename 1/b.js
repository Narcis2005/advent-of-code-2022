var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}

readModuleFile('./a.txt', function (err, words) {
    const elves = words.split(/\n\s*\n/);
    const eachElf = elves.map(elf => elf.split(/\r?\n/).reduce((a,b) => {return a+parseInt(b)}, 0))
    // console.log(elves[0].split(/\r?\n/).forEach(e => console.log(+e)))
    let biggestFirst = -1;
    let biggestSecond = -1;
    let biggestThird = -1;
    eachElf.forEach(elf => {
        if(elf>biggestFirst) {
            biggestThird = biggestSecond;
            biggestSecond = biggestFirst;
            biggestFirst =  elf;
        }
        else if( elf > biggestSecond) {
            biggestThird = biggestSecond;
            biggestSecond = elf;
        }
        else if( elf > biggestThird) {
            biggestThird =  elf;
        }
    });
    console.log(biggestFirst + biggestSecond + biggestThird)
});