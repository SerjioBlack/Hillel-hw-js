'use strict';

let arr = ["apple", "John", "51", "Interstellar", "276"]
const indexOfNew = (arr, item, from = 0) => {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

const lastIndexOf = (arr, item, from = arr.length - 1) => {
    for (let i = from; i < arr.length; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

const find = (arr, item, index) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return item;
        }
    }
    return undefined;
};

const findIndex = (arr, item, index) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

const includes = (arr, item, from = 0) => {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
};

const everyLengthSearch = (arr, maxLength, minLength) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= maxLength && arr[i].length <= minLength) {
            return true;
        }
    }
    return false;
};

const someLengthSearch = (arr, maxLength, minLength) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= maxLength || arr[i].length <= minLength) {
            return true;
        }
    }
    return false;
};
