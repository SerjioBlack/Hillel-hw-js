'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favoritesList');
    const itemsList = document.getElementById('itemsList');
    const colorSchemeInputs = document.querySelectorAll(
      'input[name="colorScheme"]',
    );

    const savedColorScheme = localStorage.getItem('colorScheme');
    if (savedColorScheme) {
      document.body.classList.add(savedColorScheme);
      colorSchemeInputs.forEach((input) => {
        if (input.value === savedColorScheme) {
          input.checked = true;
        }
      });
    }

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function updateFavorites() {
      favoritesList.innerHTML = '';
      savedFavorites.forEach((itemId) => {
        const item = document.querySelector(`[data-id="${itemId}"]`);
        if (item) {
          const li = document.createElement('li');
          li.textContent = item.textContent;
          favoritesList.appendChild(li);
        }
      });
    }

    function toggleFavorite(itemId) {
      const index = savedFavorites.indexOf(itemId);
      if (index === -1) {
        savedFavorites.push(itemId);
      } else {
        savedFavorites.splice(index, 1);
      }
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));
      updateFavorites();
    }

    function applyColorScheme(scheme) {
      document.body.className = scheme;
      localStorage.setItem('colorScheme', scheme);
    }

    colorSchemeInputs.forEach((input) => {
      input.addEventListener('change', function () {
        applyColorScheme(this.value);
      });
    });

    itemsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('toggleFavorite')) {
        const itemId = e.target.closest('li').dataset.id;
        toggleFavorite(itemId);
      }
    });

    updateFavorites();
  });
}());
