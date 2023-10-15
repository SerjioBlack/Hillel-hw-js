'use strict;'

let result = 0;

function numToExponent(
    num = +prompt("Enter number"),
    exponent = +prompt("Enter exponent")
) {
    if (isNaN(num, exponent)) {
        alert("its not a number");
    } else {
        result = num ** exponent;
    }
    return result;
}
numToExponent();
alert(result);
