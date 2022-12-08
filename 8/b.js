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
    let biggest = 0;
    for(let i = 0; i<eachLineArray.length; i++) {
        for(let j= 0; j<eachLineArray[i].length; j++) {
            if( i === 0 || j === 0 || i === eachLineArray.length -1 || j=== eachLineArray[i].length -1) {
                continue;
            }
            let product =  1;
            for(let k = i-1; k>= 0; k--) {
                if(eachLineArray[k][j] >= eachLineArray[i][j] || k === 0) {
                    product *= i-k;
                    break;
                }
            }
            for(let k = i+1; k<eachLineArray.length; k++) {
                if(eachLineArray[k][j] >= eachLineArray[i][j] || k === eachLineArray.length-1) {
                    product *= k-i;
                    break;
                }
            }
            for(let k = j-1; k>= 0; k--) {
                if(eachLineArray[i][k] >= eachLineArray[i][j] || k === 0) {
                    product *= j-k;
                    break
                }
            }
            for(let k = j+1; k<eachLineArray[i].length; k++) {
                if(eachLineArray[i][k] >= eachLineArray[i][j] || k === eachLineArray[i].length -1) {
                    product *= k-j;
                    break;
                }
            }
            if(product > biggest) {
                biggest = product;
            };
 
        }
    }
    console.log(biggest)
})