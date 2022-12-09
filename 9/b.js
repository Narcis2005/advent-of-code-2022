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
    let tailPosition = {1:"0:0",2:"0:0",3:"0:0",4:"0:0",5:"0:0",6:"0:0",7:"0:0",8:"0:0",9:"0:0",};
    let headPosition = "0:0";
    set.add(tailPosition[9])
    for(let i = 0; i<eachLineArray.length; i++) {
        for(let j = 0; j<parseInt(eachLineArray[i].split(" ")[1]); j++){
            if(eachLineArray[i].split(" ")[0] === "U") {
                headPosition = headPosition.split(":")[0] + ":" + (parseInt(headPosition.split(":")[1])+1).toString();
            }
            else if(eachLineArray[i].split(" ")[0] === "D") {
                headPosition = headPosition.split(":")[0] + ":" + (parseInt(headPosition.split(":")[1])-1).toString();
            }
            else if(eachLineArray[i].split(" ")[0] === "R") {
                headPosition = (parseInt(headPosition.split(":")[0])+1).toString() + ":" + headPosition.split(":")[1];
            }
            else if(eachLineArray[i].split(" ")[0] === "L") {
                headPosition = (parseInt(headPosition.split(":")[0])-1).toString() + ":" + headPosition.split(":")[1];
            }
            let positionToCompare = headPosition;
            for(let k = 1; k<=9; k++) {
                if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 2 ) {
                    if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 0) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + tailPosition[k].split(":")[1];
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === -1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === -2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    }
                }
                else if( parseInt(tailPosition[k].split(":")[0]) - parseInt(positionToCompare.split(":")[0]) === 2 ) {
                    if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 0) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + tailPosition[k].split(":")[1];
                    }
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === -1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === 2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1]) === -2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    } 
                }
                else if( parseInt(positionToCompare.split(":")[1]) - parseInt(tailPosition[k].split(":")[1])  === 2 ) {
                    if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 0) {
                        tailPosition[k] = tailPosition[k].split(":")[0] + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === -1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === -2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])+1).toString();
                    } 
                }
                else if(parseInt(tailPosition[k].split(":")[1]) - parseInt(positionToCompare.split(":")[1])  === 2 ) {
                    if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 0) {
                        tailPosition[k] = tailPosition[k].split(":")[0] + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    }
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === -1) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])+1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    } 
                    else if(parseInt(positionToCompare.split(":")[0]) - parseInt(tailPosition[k].split(":")[0]) === 2) {
                        tailPosition[k] = (parseInt(tailPosition[k].split(":")[0])-1).toString() + ":" + (parseInt(tailPosition[k].split(":")[1])-1).toString();
                    } 

                }
                else break;
                positionToCompare = tailPosition[k];
            }
            set.add(tailPosition[9]);
        }
    }
    console.log(set.size)

})