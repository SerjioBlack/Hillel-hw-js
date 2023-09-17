'use strict';

function Add(number1, number2){
    return number1 + number2;
}

function Sub(number1, number2){
    return number1 - number2;
}

function Mul(number1, number2){
    return number1 * number2;
}

function Div(number1, number2){
    return number1 / number2;
}

let number1 = parseInt(prompt('Add first number'));
let number2 = parseInt(prompt('Add second number'));

console.log( "Sub: " + Sub(number1, number2));
console.log( "Add: " + Add(number1, number2));
console.log( "Mul: " + Mul(number1, number2));
console.log( "Div: " + Div(number1, number2));
