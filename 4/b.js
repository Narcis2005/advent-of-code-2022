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
    const pairs = input.split(/\r?\n/);
    const pairsInArray = pairs.map(pair => pair.split(","))
    let numberOfContainedPairs = 0;
    pairsInArray.forEach(pair => {
        if(parseInt(pair[0].split("-")[1]) >= parseInt(pair[1].split("-")[0]) && parseInt(pair[0].split("-")[0]) <= parseInt(pair[1].split("-")[1])) {
            numberOfContainedPairs++;
        }
    })
    console.log(numberOfContainedPairs)
})