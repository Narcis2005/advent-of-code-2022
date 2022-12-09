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
    const set = new Set();
    let tailPosition = "0:0";
    let headPosition = "0:0";
    set.add(tailPosition)
    for(let i = 0; i<eachLineArray.length; i++) {
        if(eachLineArray[i].split(" ")[0] === "R") {
            for(let j = 0; j<parseInt(eachLineArray[i].split(" ")[1]); j++){
                headPosition = (parseInt(headPosition.split(":")[0])+1).toString() + ":" + headPosition.split(":")[1];
                if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === 2 ) {
                    if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === 1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])+1).toString() + ":" + (parseInt(tailPosition.split(":")[1])+1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === 0) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])+1).toString() + ":" + tailPosition.split(":")[1];
                    }
                    else if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === -1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])+1).toString() + ":" + (parseInt(tailPosition.split(":")[1])-1).toString();
                    }
                    set.add(tailPosition);

                }
            }
        }
        else if(eachLineArray[i].split(" ")[0] === "L") {
            for(let j = 0; j<parseInt(eachLineArray[i].split(" ")[1]); j++){
                headPosition = (parseInt(headPosition.split(":")[0])-1).toString() + ":" + headPosition.split(":")[1];
                if( parseInt(tailPosition.split(":")[0]) - parseInt(headPosition.split(":")[0]) === 2 ) {
                    if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === 1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])-1).toString() + ":" + (parseInt(tailPosition.split(":")[1])+1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === 0) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])-1).toString() + ":" + tailPosition.split(":")[1];
                    }
                    else if(parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1]) === -1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])-1).toString() + ":" + (parseInt(tailPosition.split(":")[1])-1).toString();
                    }
                    set.add(tailPosition);

                }
            }
        }
        else if(eachLineArray[i].split(" ")[0] === "U") {
            for(let j = 0; j<parseInt(eachLineArray[i].split(" ")[1]); j++){
                headPosition = headPosition.split(":")[0] + ":" + (parseInt(headPosition.split(":")[1])+1).toString();
                if( parseInt(headPosition.split(":")[1]) - parseInt(tailPosition.split(":")[1])  === 2 ) {
                    if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === 1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])+1).toString() + ":" + (parseInt(tailPosition.split(":")[1])+1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === 0) {
                        tailPosition = tailPosition.split(":")[0] + ":" + (parseInt(tailPosition.split(":")[1])+1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === -1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])-1).toString() + ":" + (parseInt(tailPosition.split(":")[1])+1).toString();
                    }
                    set.add(tailPosition);
                }

            }
        }
        else if(eachLineArray[i].split(" ")[0] === "D") {
            for(let j = 0; j<parseInt(eachLineArray[i].split(" ")[1]); j++){
                headPosition = headPosition.split(":")[0] + ":" + (parseInt(headPosition.split(":")[1])-1).toString();
                if(parseInt(tailPosition.split(":")[1]) - parseInt(headPosition.split(":")[1])  === 2 ) {
                    if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === 1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])+1).toString() + ":" + (parseInt(tailPosition.split(":")[1])-1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === 0) {
                        tailPosition = tailPosition.split(":")[0] + ":" + (parseInt(tailPosition.split(":")[1])-1).toString();
                    }
                    else if(parseInt(headPosition.split(":")[0]) - parseInt(tailPosition.split(":")[0]) === -1) {
                        tailPosition = (parseInt(tailPosition.split(":")[0])-1).toString() + ":" + (parseInt(tailPosition.split(":")[1])-1).toString();
                    }
                    set.add(tailPosition);

                }
            }
        }
    }
    console.log(set.size)

})