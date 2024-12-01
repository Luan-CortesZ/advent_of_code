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

//Sort the arrays
leftNumbers.sort((a, b) => a - b);
rightNumbers.sort((a, b) => a - b);

//Calculate the distance between the numbers
resultsDistance.push(...calculateDistanceBetweenNumbers());
const sumDistance = resultsDistance.reduce((a, b) => a + b, 0);
console.log(`Distance addition -> ${sumDistance}`);

//Calculate the similary score
resultsSimilaryScore.push(...calculateSimilaryScore());
const sumSimilaryScore = resultsSimilaryScore.reduce((a, b) => a + b, 0);
console.log(`Similary score addition -> ${sumSimilaryScore}`);

/**
 * Calculates the absolute distance between corresponding numbers in the leftNumbers and rightNumbers arrays.
 * 
 * @returns {number[]} An array of distances.
 */
function calculateDistanceBetweenNumbers(){
    const results = [];
    leftNumbers.forEach((left, index) => {
        let result = Math.abs(left - rightNumbers[index]);
        results.push(result);
    });
    
    return results;
};

/**
 * Calculates the similarity score for each number in the leftNumbers array.
 * The similarity score is the product of the number and the count of its occurrences in the rightNumbers array.
 * 
 * @returns {number[]} An array of similarity scores.
 */
function calculateSimilaryScore(){
    const results = [];
    leftNumbers.forEach(left => {
        let result = rightNumbers.filter(x => x === left).length * left;
        results.push(result);
    });
    return results
}