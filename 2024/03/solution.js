const fs = require('fs');
const fileContent = fs.readFileSync('./2024/03/input.txt', 'utf8').split('\n');
const oneLineFile = "do()"+(fileContent.join('')) + "don't()";

const regexMulInsideDoDont = /do\(\)(?:(?!don't\(\)).)*?mul\((\d+),(\d+)\)(?:(?!don't\(\)).)*?don't\(\)/gs;
const allMatches = [...oneLineFile.matchAll(regexMulInsideDoDont)]
const mulMatches = [];

allMatches.forEach(match => {
    const textBetween = match[0];
    const regexMul = /mul\((\d+),(\d+)\)/g;
    mulMatches.push(...textBetween.matchAll(regexMul));
});

const sum = mulMatches.map(match => mul(Number(match[1]), Number(match[2]))).reduce((a, b) => a + b, 0);

console.log("Sum of all multiplications: " + sum);

function mul(a, b) {
    return a * b;
}