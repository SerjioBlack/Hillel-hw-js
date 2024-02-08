'use strict;'

function trackObjects() {
  const trackedObjects = new WeakSet();

  return function (obj) {
    if (trackedObjects.has(obj)) {
      return true;
    } else {
      trackedObjects.add(obj);
      return false;
    }
  };
}

const checkObject = trackObjects();

const obj1 = { name: "John" };
const obj2 = { name: "Jane" };

console.log(checkObject(obj1));
console.log(checkObject(obj1));
console.log(checkObject(obj2));
console.log(checkObject(obj2));

