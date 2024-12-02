const fs = require('fs');
const fileContent = fs.readFileSync('./2024/02/input.txt', 'utf8').split('\n');

const numbersList = []
let nbSafeNumbers = 0;
let nbSadeNumbersRemovingAnyLevel = 0;

fileContent.forEach(line => {
    const lineNumbers = line.split(' ')
    numbersList.push(lineNumbers.map((number) => parseInt(number)))
});

numbersList.forEach(numbers => {
    if(isSafe(numbers)) {
        nbSafeNumbers++;
    }
});
numbersList.forEach(numbers => {
    if(isSafeRemovingAnyLevel(numbers)) {
        nbSadeNumbersRemovingAnyLevel++;
    }
});

console.log(`There are ${nbSafeNumbers} safe numbers`);
console.log(`There are ${nbSadeNumbersRemovingAnyLevel} safe numbers without any level`);
  
function isSafeRemovingAnyLevel(array){
    if(isSafe(array)) {
        return true;
    }
    for (let i = 0; i < array.length; i++) {
        const nbTmp = array.slice();
        nbTmp.splice(i, 1);
        if(isSafe(nbTmp)) {
            return true
        }  
    }
    return false;
}

function isSafe(array) {
    return isDecrease(array) || isIncrease(array); 
}

function isIncrease(array) {
    return checkOrder(array, (a, b) => a > b);
}

function isDecrease(array) {
    return checkOrder(array, (a, b) => a < b);
}

function checkOrder(array, comparator) {
    for (let i = 0; i < array.length - 1; i++) {
        let diff = Math.abs(array[i] - array[i+1]);
        if (comparator(array[i], array[i+1]) || diff < 1 || diff > 3) {
            return false;
        }
    }
    return true;
}