const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8').split('\n');

const leftNumbers = [];
const rightNumbers = [];
const results = [];

//Put the numbers in the left and right arrays
fileContent.forEach((line) => {
    const numbers = line.split('   ');
    leftNumbers.push(parseInt(numbers[0]));
    rightNumbers.push(parseInt(numbers[1].substring(0,5)));
})

leftNumbers.sort((a, b) => a - b);
rightNumbers.sort((a, b) => a - b);

for (let i = 0; i < leftNumbers.length; i++) {
    let result = leftNumbers[i]-rightNumbers[i];
    if(result<0){{result = -result}}
    results.push(result);

    console.log(leftNumbers[i], rightNumbers[i], result);
    
}

const sum = results.reduce((a, b) => a + b, 0);

console.log(sum);
