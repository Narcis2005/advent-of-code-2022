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
    const eachLineArray = input.split(/\r?\n/)
    const files = {};
    let path = [];
    eachLineArray.forEach(line => {
        if(line.split("$").length == 2) {
            if(line.split("$")[1].split("cd ").length == 2){
                if(line.split("$")[1].split("cd ")[1] === "..") {
                    path.pop();
                }
                else if(line.split("$")[1].split("cd ")[1] === "/") {
                    path = new Array();
                }
                else {
                    path.push(line.split("$")[1].split("cd ")[1])
                }
            }
        }
        else {
            const pathString = path.length > 0 ? "." + path.join(".") : "";
            if(line.split("dir ").length===2) {
                eval("files" + pathString + "." +line.split("dir ")[1] + " = {}")


            }
            else {
                const removedDot = line.split(" ")[1].replace(".", "");
                     eval("files" + pathString + "." +removedDot +  "=" + 'line.split(" ")[0]')  
            }
        }
    })
    const setPrice = (obj) => {
        let price = 0;
        for(const i in obj) {
            if(typeof obj[i] !== "string") {
                price += setPrice(obj[i]);
            }
            else {
                price += parseInt(obj[i]);
            }
        }
        obj.price = price;
    return price;

    }
    setPrice(files)

    const remainingSpace = 70000000 - files.price;
    const spaceNeeded = 30000000 -  remainingSpace;
    let price  = 70000000;
       const checkPrice = (obj) => {
        for(const i in obj) {
            if(obj[i].price && obj[i].price < price && obj[i].price>= spaceNeeded) {
                price=obj[i].price;
            }
            if(typeof obj[i] !== "string") {
                checkPrice(obj[i]);
            }
        }
    }
    checkPrice(files)
    console.log(price)
 })