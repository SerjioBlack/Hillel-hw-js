'use strict';

(function () {
  const FORM_DATA = 'formData';

  const saveData = (key, data = null) => {
    localStorage.setItem(FORM_DATA, JSON.stringify(data));
    return data;
  };

  const getData = (key) => {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  };

  const prefillForm = (form) => {
    const data = getData('');
    if (data === null) return;
    form
      .querySelectorAll('input, textarea, select')
      .forEach((input) => (input.value = data[input.name]));
  };

  const formHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { target } = e;
    const data = {};
    target
      .querySelectorAll('input, textarea, select')
      .forEach((item) => (data[item.name] = item.value));
    saveData(FORM_DATA, data);
  };

  const loadedHandler = (e) => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', formHandler);
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
}());
