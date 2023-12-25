'use strict';

(() => {
  const user = {
    name: 'John',
  };

  Object.defineProperty(user, 'name', { writable: false });
  Object.defineProperty(user, 'age', {
    value: 40,
    enumerable: false,
    configurable: true,
    writable: true,
  });

  for (const key in user) console.log(key);
  console.log(Object.keys(user));

  Object.defineProperty(user, 'surname', {
    value: 'Malcovich',
    writable: true,
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
    set(value) {
      [this.name, this.surname] = value.split(' ');
    },
    enumerable: true,
    configurable: true,
  });
})();

(() => {
  const userTwo = Object.freeze({
    name: 'Jack',
    age: 30,
  });

  Object.defineProperty(userTwo, 'name', {
    value: 28,
    writable: true,
    enumerable: true,
    configurable: true,
  });
})();
