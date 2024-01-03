'use strict';

(() => {
  function reverseArrayIterator(arr) {
    let index = arr.length - 1;

    return {
      next() {
        return index >= 0
          ? { value: arr[index--], done: false }
          : { done: true };
      },
    };
  }

  const myArray = [1, 2, 3, 4, 5];
  const reverseIterator = reverseArrayIterator(myArray);

  reverseIterator.next();
  reverseIterator.next();
  reverseIterator.next();
  reverseIterator.next();
  reverseIterator.next();
})();

(() => {
  function* fibonacciGenerator() {
    let a = 0;
    let b = 1;

    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }

  const fibonacciSequence = fibonacciGenerator();

  fibonacciSequence.next();
  fibonacciSequence.next();
  fibonacciSequence.next();
  fibonacciSequence.next();
  fibonacciSequence.next();
})();

(() => {
  function createObjectKeysIterator(obj) {
    const keys = Object.keys(obj);
    let index = 0;

    return {
      next() {
        if (index < keys.length) {
          return { value: keys[index++], done: false };
        }
        return { done: true };
      },
    };
  }

  const myObject = { a: 1, b: 2, c: 3 };
  const keysIterator = createObjectKeysIterator(myObject);

  let result = keysIterator.next();
  while (!result.done) {
    console.log(result.value);
    result = keysIterator.next();
  }
})();
