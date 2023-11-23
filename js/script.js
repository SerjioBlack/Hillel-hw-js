'use strict';

(() => {
    const input = document.querySelector("[data-text]");
    const ghost = document.createElement("div");
    ghost.innerHTML = "Hello from Ghost";
    document.body.appendChild(ghost);

    input.addEventListener("focus", () => {
        ghost.style.visibility = "visible";
    });

    input.addEventListener("blur", () => {
        ghost.style.visibility = "hidden";
    });
})();









