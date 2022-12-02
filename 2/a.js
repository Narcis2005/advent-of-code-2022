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
    const rounds = input.split(/\r?\n/);
    const eachRoundChoiceAsArray = rounds.map(round => round.split(" "));
    let totalScore = 0;
    eachRoundChoiceAsArray.forEach(round => {
        //Opponent chooses rock
        if(round[0] === "A") {
            //You choose Rock
            if(round[1] === "X") {
                totalScore += 1;
                totalScore += 3;
            }

            //You choose paper
            else if(round[1] === "Y") {
                totalScore += 2;
                totalScore += 6;
            }
            //You choose scrissors
            else if(round[1] === "Z") {
                totalScore +=3;
                totalScore += 0;
            }
        }
        //Opponent chooses paper
        else if(round[0] === "B") {
            //You choose Rock
            if(round[1] === "X") {
                totalScore += 1;
                totalScore += 0;
            }

            //You choose paper
            else if(round[1] === "Y") {
                totalScore += 2;
                totalScore += 3;
            }
            //You choose scrissors
            else if(round[1] === "Z") {
                totalScore +=3;
                totalScore += 6;
            }
        }
        //Opponent chooses scrissors
        else if(round[0] === "C") {
            //You choose Rock
            if(round[1] === "X") {
                totalScore += 1;
                totalScore += 6;
            }

            //You choose paper
            else if(round[1] === "Y") {
                totalScore += 2;
                totalScore += 0;
            }
            //You choose scrissors
            else if(round[1] === "Z") {
                totalScore +=3;
                totalScore += 3;
            }
        }
    })
    console.log(totalScore)
})