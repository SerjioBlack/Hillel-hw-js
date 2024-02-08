'use strict;'
function cacheComplexCalculations(complexFunction) {
  const cache = new WeakMap();

  return function (obj) {
    if (cache.has(obj)) {
      console.log("Retrieving result from cache...");
      return cache.get(obj);
    } else {
      console.log("Calculating result...");
      const result = complexFunction(obj);
      cache.set(obj, result);
      return result;
    }
  };
}

function complexFunction(obj) {
  return obj.value * obj.value;
}

const cachedComplexFunction = cacheComplexCalculations(complexFunction);

const obj1 = { value: 5 };
const obj2 = { value: 10 };

console.log(cachedComplexFunction(obj1));
console.log(cachedComplexFunction(obj2));
console.log(cachedComplexFunction(obj2));
