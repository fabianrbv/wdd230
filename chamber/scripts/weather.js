const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastContainer = document.querySelector("#weather-forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.711625276508799&lon=-74.0741917647238&appid=2bff915d0c31ac12313df9489fdfbe80&units=metric";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=4.711625276508799&lon=-74.0741917647238&appid=2bff915d0c31ac12313df9489fdfbe80&units=metric";

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeather() {
    const currentWeather = await apiFetch(url);
    currentTemp.innerHTML = `${currentWeather.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', "Weather Icon");
    captionDesc.textContent = capitalizeEachWord(currentWeather.weather[0].description);
}

async function displayForecast() {
    const forecastData = await apiFetch(forecastUrl);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const threeDaysLater = new Date(today);
    threeDaysLater.setDate(threeDaysLater.getDate() + 4);

    const forecastList = forecastData.list.filter(entry => {
        const entryDate = new Date(entry.dt_txt.split(' ')[0]);
        return entryDate >= tomorrow && entryDate <= threeDaysLater;
    });
    forecastContainer.innerHTML = '';

    const addedDates = [];

    forecastList.forEach(entry => {
        const entryDate = new Date(entry.dt_txt.split(' ')[0]);
        const dateKey = entryDate.toDateString();

        if (!addedDates.includes(dateKey)) {
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `
                <p>${formatDate(entry.dt)}</p>
                <p>${entry.main.temp}&deg;C</p>
                <img src="https://openweathermap.org/img/w/${entry.weather[0].icon}.png" alt="${entry.weather[0].description}">
            `;
            forecastContainer.appendChild(forecastItem);

            addedDates.push(dateKey); // Agregar la fecha al arreglo de fechas agregadas
        }
    });
}


function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// script for banner

document.addEventListener("DOMContentLoaded", function () {
    var d = new Date();
    var dayOfWeek = d.getDay(); // 0 para domingo, 1 para lunes, 2 para martes, etc.

    // Mostrar el banner solo en lunes, martes y miércoles
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById("meet-greet-banner").classList.add("show");
    }

    // Agregar evento de click para cerrar el banner
    document.getElementById("close-banner").addEventListener("click", function () {
        document.getElementById("meet-greet-banner").style.display = "none";
    });
});


displayWeather();
displayForecast();
