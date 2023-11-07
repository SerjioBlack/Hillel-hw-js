'use strict';

let getFactorial = (n) => {
    return n === 1 ? n : n * getFactorial(n - 1);
};

let pow = (num, degree) => {
    return degree === 1 ? num : num * pow(num, degree - 1);
};

let getSum = (a, b) => {
    return b === 0 ? a : getSum(a + 1, b - 1);
};


