'use strict';

arr = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

const minNum = Math.min(...arr);
console.log(minNum); // -63
console.log(arr.indexOf(minNum)); // 15

let maxNumber = (a, b) => (a > b ? a : b);
console.log(arr.reduce(maxNumber)); //76
console.log(arr.indexOf(arr.reduce(maxNumber))); //18

const negativeItems = arr.filter((item) => item < 0);
console.log(negativeItems.length); // 10

const positiveItems = arr.filter((item) => item > 0 && item % 2 !== 0);
console.log(positiveItems.length); // 4

const positiveItems = arr.filter((item) => item > 0 && item % 2 === 0);
console.log(positiveItems.length); //10

const positiveItems = arr.filter((item) => item > 0 && item % 2 === 0);
const sumPositive = positiveItems.reduce((sum, current) => sum + current);
console.log(sumPositive); //292

const negativeItems = arr.filter((item) => item > 0 && item % 2 !== 0);
const sumNegative = negativeItems.reduce((sum, current) => sum + current);
console.log(sumNegative);

const positiveItems = arr.filter((item) => item > 0);
const multPositive = positiveItems.reduce((mult, current) => mult * current);
console.log(multPositive);

const maxNum = Math.max(...arr);
const newArr = arr.map((item) => (item === maxNum ? item : 0));
console.log(newArr);
