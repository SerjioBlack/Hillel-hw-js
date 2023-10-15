'use strict;'

const string = prompt("enter something");
const targetLength = prompt("enter length");
const direction = prompt("left or right", "left");
const symb = prompt("enter symbol");

function padString(string, targetLength) {
    if (string !== null && targetLength !== null && direction === "left") {
        return string
            .substr(0, targetLength)
            .toString()
            .padStart(targetLength, symb);
    } else if (
        string !== null &&
        targetLength !== null &&
        direction === "right"
    ) {
        return string.toString().padEnd(targetLength, symb);
    } else if (string === null || targetLength !== null || direction !== null) {
        return "Check all fields";
    }
}
alert(padString(string, targetLength));
