'use strict';

let createTable = () => {
    const table = document.createElement("table");

    let count = 1;
    for (let i = 1; i <= 10; i++) {
        const row = table.insertRow();
        for (let j = 1; j <= 10; j++) {
            const cell = row.insertCell();
            cell.innerHTML = count++;
        }
    }
    document.body.appendChild(table);
};

createTable();







