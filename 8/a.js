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
    let count = 0;
    for(let i = 0; i<eachLineArray.length; i++) {
        for(let j= 0; j<eachLineArray[i].length; j++) {
            if( i === 0 || j === 0 || i === eachLineArray.length -1 || j=== eachLineArray[i].length -1) {
                count++;
                continue;
            }
            let visible =  0;
            for(let k = i-1; k>= 0; k--) {
                if(eachLineArray[k][j] >= eachLineArray[i][j]) {
                    visible++
                    break;
                }
            }
            for(let k = i+1; k<eachLineArray.length; k++) {
                if(eachLineArray[k][j] >= eachLineArray[i][j]) {
                    visible++;
                    break;
                }
            }
            for(let k = j-1; k>= 0; k--) {
                if(eachLineArray[i][k] >= eachLineArray[i][j]) {
                    visible++
                    break
                }
            }
            for(let k = j+1; k<eachLineArray[i].length; k++) {
                if(eachLineArray[i][k] >= eachLineArray[i][j]) {
                    visible++;
                    break;
                }
            }
            if(visible <4) {
                count++
            };
 
        }
    }
    console.log(count)
})