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
    let biggest = eachElf[0];
    eachElf.forEach(elf => {if(elf>biggest) biggest = elf});
    console.log(biggest)
});