'use strict';

let ulList = document.getElementById("ulId");
console.log(ulList.children);

let arr = [];
for (let liElem of ulList.getElementsByTagName("li")) {
    arr.push(liElem.textContent);
}
console.log(arr);
console.log(arr.length);






