var fs = require('fs');

function readModuleFile(path, callback) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, 'utf8', callback);
    } catch (e) {
        callback(e);
    }
}
readModuleFile('./input.txt', async function (err, input) { 
    const monkeys = input.split(/\n\s*\n/);
    const monkeysObject = {}
    for (let i = 0; i<monkeys.length; i++) {
        let startingItems = monkeys[i].split(/\r?\n/)[1].split(": ")[1].split(", ").map(number => parseInt(number));
        let operation = monkeys[i].split(/\r?\n/)[2].split("Operation: new = old ")[1].split(" ")[0];
        let operationNumber = monkeys[i].split(/\r?\n/)[2].split("Operation: new = old ")[1].split(" ")[1];
        let test = parseInt(monkeys[i].split(/\r?\n/)[3].split("Test: divisible by ")[1]);
        let ifTrue = parseInt(monkeys[i].split(/\r?\n/)[4].split("If true: throw to monkey ")[1]);
        let ifFalse = parseInt(monkeys[i].split(/\r?\n/)[5].split("If false: throw to monkey ")[1])
        monkeysObject[i] = {
            startingItems,
            operation,
            operationNumber,
            test,
            ifTrue,
            ifFalse
        }
    }
    const monkeysInspectedItems = {};
    for(let i = 1; i<=20; i++) {
        for(let monkey in monkeysObject) {
            const length = monkeysObject[monkey]["startingItems"].length;
            for(let j = 0; j<length; j++) {
                if(monkeysInspectedItems[monkey]) {
                    monkeysInspectedItems[monkey]++;
                }
                else {
                    monkeysInspectedItems[monkey] = 1;
                }
                
                let currentNumber  = monkeysObject[monkey]["startingItems"][0];
                if(monkeysObject[monkey]["operation"] === "*") {
                    if(monkeysObject[monkey]["operationNumber"]!=="old") {
                        currentNumber = currentNumber * parseInt(monkeysObject[monkey]["operationNumber"]);
                    }
                    else {
                        currentNumber = currentNumber * currentNumber;
                    }
                }
                else if(monkeysObject[monkey]["operation"] === "+") {

                    if(monkeysObject[monkey]["operationNumber"]!=="old") {
                        currentNumber = currentNumber + parseInt(monkeysObject[monkey]["operationNumber"]);
                    }
                    else {
                        currentNumber = currentNumber + currentNumber;
                    }                
                }
                currentNumber = Math.floor(currentNumber/3);
                if(currentNumber % monkeysObject[monkey]["test"] === 0) {
                    monkeysObject[monkeysObject[monkey]["ifTrue"]]["startingItems"].push(currentNumber);
                }
                else monkeysObject[monkeysObject[monkey]["ifFalse"]]["startingItems"].push(currentNumber);
                monkeysObject[monkey]["startingItems"].shift()
            }
        }
    }
    const sortedMonkeys = Object.keys({...monkeysInspectedItems}).sort(function(a,b){return monkeysInspectedItems[b]-monkeysInspectedItems[a]})
    console.log(monkeysInspectedItems[sortedMonkeys[0]] * monkeysInspectedItems[sortedMonkeys[1]])

})