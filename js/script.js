'use strict';

let a = +prompt('enter number', '');
a === 0 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a > 0 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a < 0 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a >= 0 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a <= 0 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a !== 0 ? console.log('Вірно') : console.log('Неправильно');

let a = prompt('enter test', '');
a === "test" ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
a === 1 ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
(a > 0 && a < 5) ? console.log('Вірно') : console.log('Неправильно');

let a = +prompt('enter number', '');
(a === 0 || a === 2) ? console.log(a+=7) : console.log(a/=10);

let a = +prompt('enter number a', '');
let b = +prompt('enter number b', '');
(a <= 1 && b >= 3) ? console.log(a+b) : console.log(a-b);

let a = +prompt('enter number a', '');
let b = +prompt('enter number b', '');
(a > 2 && a < 11) || (b >=6 && b < 14) ? console.log('Вірно') : console.log('Невірно');


let num = 1;

switch (num) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('літо');
        break;
    case 4:
        console.log('осінь');
        break;
    default:
        console.log("enter number from 1 to 4");
}