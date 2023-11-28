'use strict';

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
        tabContents.forEach((tabContent) => (tabContent.style.display = "none"));

        const tabId = this.id.replace("tab", "content");

        const selectedTab = document.getElementById(tabId);
        selectedTab.style.display = "block";
    })
});

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const full = document.querySelector(".full-img");
const images = ["pic1.jpg", `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

for (const image of images) {
    let newImage = document.createElement("img");
    newImage.setAttribute("src", `image/${image}`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (e) => {
        displayedImage.src = e.target.src;
    })
};

full.addEventListener("click", function () {
    // При клике, масштабируем элемент
    if (full.style.transform === "scale(1)") {
        full.style.transform = "scale(1.2)";
    } else {
        full.style.transform = "scale(1)";
    }
});

btn.addEventListener("click", () => {
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.innerHTML = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.innerHTML = "Darker";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});








