const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').split('\n');

const leftNumbers = [];
const rightNumbers = [];
const resultsDistance = [];
const resultsSimilaryScore = [];

//Put the numbers in the left and right arrays
fileContent.forEach((line) => {
    const numbers = line.split('   ');
    leftNumbers.push(parseInt(numbers[0]));
    rightNumbers.push(parseInt(numbers[1].substring(0,5)));
})

leftNumbers.sort((a, b) => a - b);
rightNumbers.sort((a, b) => a - b);

function calculateDistanceBetweenNumbers(){
    const results = [];
    for (let i = 0; i < leftNumbers.length; i++) {
        let result = leftNumbers[i]-rightNumbers[i];
        if(result<0){{result = -result}}
        results.push(result);
    }
    return results;
};

function calculateSimilaryScore(){
    const results = [];
    leftNumbers.forEach(left => {
        let count = 0;
        rightNumbers.forEach(right => {
            if(left === right){
                count++;
            }
        });
        results.push(left*count);
    });
    return results;
}

resultsDistance.push(...calculateDistanceBetweenNumbers());
const sumDistance = resultsDistance.reduce((a, b) => a + b, 0);
console.log(`Distance addition -> ${sumDistance}`);

resultsSimilaryScore.push(...calculateSimilaryScore());
const sumSimilaryScore = resultsSimilaryScore.reduce((a, b) => a + b, 0);
console.log(`Similary score addition -> ${sumSimilaryScore}`);
