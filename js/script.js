'use strict';

const insertWordInto = function (str) {
    let newStr = str;

    function inner(word) {
        let arr = newStr.split(" ");
        arr
            .splice(((arr.length + 1) * Math.random()) | 0, 0, word)
            .sort(() => Math.random() - 0.5);
        return arr.join(" ");
    }
    return inner("Odessa");
};
insertWordInto("Hello world");
insertWordInto("Hello world");
insertWordInto("Hello world");







