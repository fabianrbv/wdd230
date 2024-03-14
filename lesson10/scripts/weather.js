const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.749995994671956&lon=6.637112402032337&units=imperial&appid=2bff915d0c31ac12313df9489fdfbe80"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayResults = (data) => {

    data.weather.forEach(w => {
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${w.icon}`;
        weatherIcon.setAttribute('src', iconsrc + ".png");
        weatherIcon.setAttribute('alt', "Weather Icon");
        captionDesc.textContent = capitalizeEachWord(`${w.description}`);
    });

}

function capitalizeEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

apiFetch()