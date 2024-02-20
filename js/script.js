document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "5d066958a60d315387d9492393935c19";
    const city = "DNIPRO";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    const weatherIcon = document.getElementById("weatherIcon");
    const cityElement = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const pressureElement = document.getElementById("pressure");
    const descriptionElement = document.getElementById("description");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("windSpeed");
    const windDirectionElement = document.getElementById("windDirection");

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            cityElement.textContent = data.name;
            temperatureElement.textContent = data.main.temp;
            pressureElement.textContent = data.main.pressure;
            descriptionElement.textContent = data.weather[0].description;
            humidityElement.textContent = data.main.humidity;
            windSpeedElement.textContent = data.wind.speed;
            windDirectionElement.textContent = data.wind.deg;
            weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch((error) => {
            console.error("There was a problem fetching the weather data:", error);
        });
});
