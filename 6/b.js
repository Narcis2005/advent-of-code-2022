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
    for(let i = 0; i<input.length-13; i++) {
        const set =  new Set();
        for(let j = i; j<=i+13; j++) {
            set.add(input[j]);
        }
            if(set.size === 14) {
                console.log(i+14);
                break;
            }
        
    }
 })