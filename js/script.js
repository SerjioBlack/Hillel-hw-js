'use strict';

const list = document.querySelector("#ulId");
console.log(list.children);

let attributesList = [];
let attributesListNames = [];
for (attr of list.attributes) {
    attributesListNames.push(attr.name);
    attributesList.push(attr.value);
}
console.log(attributesList);
console.log(attributesListNames);

list.lastElementChild.innerHTML = "Привет меня зовут Sergey";
list.firstElementChild.setAttribute("data-my-name", "Sergey");
list.removeAttribute("data-dog-tail");









