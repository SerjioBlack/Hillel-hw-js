'use strict';

const mainFunction = (callback) => {
  const number = parseFloat(prompt("Введіть число:"));
  const exponent = parseFloat(prompt("Введіть ступінь:"));

  if (!isNaN(number) && !isNaN(exponent)) {
    callback(number, exponent);
  } else {
    alert("Будь ласка, введіть коректні числа.");
  }
};

const exponentiation = (number, exponent) => {
  const result = Math.pow(number, exponent);
  alert(`Результат: ${number} в ступені ${exponent} дорівнює ${result}`);
};
mainFunction(exponentiation);


//// Callback функція multiply

const multiplyFunction = (callback) => {
  const firstNumber = parseFloat(prompt("Введіть перше число:"));
  const secondNumber = parseFloat(prompt("Введіть друге число:"));

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    callback(firstNumber, secondNumber);
  } else {
    alert("Будь ласка, введіть коректні числа.");
  }
};

const multiplyCallback = (firstNumber, secondNumber) => {
  const result = firstNumber * secondNumber;
  alert(
      `Результат: ${firstNumber} помножене на ${secondNumber} дорівнює ${result}`
  );
};
multiplyFunction(multiplyCallback);