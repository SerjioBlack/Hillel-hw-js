'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const userDataList = document.getElementById('userDataList');

    const getData = (key) => {
      let data = localStorage.getItem(key);
      data = JSON.parse(data);
      return data;
    };

    const displayData = () => {
      const data = getData('formData');

      if (!data) {
        userDataList.innerHTML = '<li>Нет введенных данных</li>';
        return;
      }

      userDataList.innerHTML = Object.entries(data)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');
    };

    displayData();
  });
}());
