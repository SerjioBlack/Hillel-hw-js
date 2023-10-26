'use strict';

let arr = prompt("введите значения через запятую, минимум 4 значения").split(
    ","
);
console.log(arr);
arr.sort((a, b) => a - b);
console.log(arr);
arr.splice(1, 3);
console.log(arr);