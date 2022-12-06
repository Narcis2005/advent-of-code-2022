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
    for(let i = 0; i<input.length-3; i++) {
        if(input[i] !== input[i+1] && input[i] !== input[i+2] && input[i] !== input[i+3] &&
             input[i+1] !== input[i+2] && input[i+1] !== input[i+3] &&
              input[i+2] !== input[i+3]
            ) {
            console.log(i+4);
            break;
            
        }
    }

 })