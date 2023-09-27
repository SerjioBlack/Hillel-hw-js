'use strict';

// Task #1

let user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;
console.log(user);

// Task #2

const user_1 = {
    name: "John"
};
// Це працюватиме?
user_1.name = "Pete";

//Ответ: Працюватиме.
// Объявление const защищает только саму переменную от изменений.
// user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.

// Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = null;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);