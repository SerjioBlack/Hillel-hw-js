'use strict';

(() => {
    const img = new Image(400, 400);
    document.body.appendChild(img);

    const imageFiles = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
    ];
    const randomFileName =
        imageFiles[Math.floor(Math.random() * imageFiles.length)];

    return (img.src = `image/${randomFileName}`);
})();








