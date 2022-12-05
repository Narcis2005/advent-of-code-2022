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
    const storage = input.split(/\n\s*\n/)[0];
    const splittedStorage = storage.split(/\r?\n/);
    const splittedRowsStorage = new Array(9).fill(null).map(function() { return new Array(0); });
    for(let i = 0; i<splittedStorage.length - 1; i++) {
        for(let j = 0; j<splittedStorage[i].length; j+=4) {
            if(splittedStorage[i][j+1] !== " ") {
                splittedRowsStorage[j/4].push(splittedStorage[i][j+1]);
            }

        }
    }

    const operations = input.split(/\n\s*\n/)[1];
    const formattedOperations = operations.split(/\r?\n/).map(line => line.split(" ")).map(line => line.filter(element => !isNaN(element)));
    for(let i = 0; i<formattedOperations.length; i++) {
            const columnFromWhere = parseInt(formattedOperations[i][1]) -1;
            const columnToPut = parseInt(formattedOperations[i][2]) -1;
            let quantity = parseInt(formattedOperations[i][0]);
            const reverseArray = [];
            while(quantity){
              const letter = splittedRowsStorage[columnFromWhere][0];
              splittedRowsStorage[columnFromWhere].shift()
              reverseArray.push(letter);
              quantity --;
            }  
            splittedRowsStorage[columnToPut].unshift(...reverseArray);
    }
    for(let i = 0; i<splittedRowsStorage.length; i++) {
        process.stdout.write(splittedRowsStorage[i][0])
    }
})