'use strict';

arr = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];

//1. Знайти мінімальний елемент масиву та його порядковий номер.

const minNum = Math.min(...arr);
console.log(minNum); // -63
console.log(arr.indexOf(minNum)); // 15

//2. Знайти максимальний елемент масиву та його порядковий номер.

let maxNumber = (a, b) => (a > b ? a : b);
console.log(arr.reduce(maxNumber)); //76
console.log(arr.indexOf(arr.reduce(maxNumber))); //18

// 3. Визначити кількість негативних елементів.
const negativeItems = arr.filter((item) => item < 0);
console.log(negativeItems.length); // 10

// 4. Знайти кількість непарних позитивних елементів.
const positiveItems = arr.filter((item) => item > 0 && item % 2 !== 0);
console.log(positiveItems.length); // 4

// 5. Знайти кількість парних позитивних елементів.
const positiveItems = arr.filter((item) => item > 0 && item % 2 === 0);
console.log(positiveItems.length); //10

// 6. Знайти суму парних позитивних елементів.
const positiveItems = arr.filter((item) => item > 0 && item % 2 === 0);
const sumPositive = positiveItems.reduce((sum, current) => sum + current);
console.log(sumPositive); //292

// 7. Знайти суму непарних позитивних елементів.
const negativeItems = arr.filter((item) => item > 0 && item % 2 !== 0);
const sumNegative = negativeItems.reduce((sum, current) => sum + current);
console.log(sumNegative);

// 8. Знайти добуток позитивних елементів.
const positiveItems = arr.filter((item) => item > 0);
const multPositive = positiveItems.reduce((mult, current) => mult * current);
console.log(multPositive);

// 9. Знайти найбільший серед елементів масиву, остальні обнулити.
const maxNum = Math.max(...arr);
const newArr = arr.map((item) => (item === maxNum ? item : 0));
console.log(newArr);
