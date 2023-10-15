'use strict';

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
function generateKey(length, characters) {
  let key = "";
  for (i = 0; i <= length - 1; i++) {
    let index = Math.floor(Math.random() * characters.length);
    key += characters[index];
  }
  return key;
}
let key = generateKey(8, characters);
console.log(key);
