document.addEventListener('DOMContentLoaded', function () {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=20.51481331744986&lon=-86.95590839684489&appid=2bff915d0c31ac12313df9489fdfbe80&units=metric`;
    const tomorrowUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.51481331744986&lon=-86.95590839684489&appid=2bff915d0c31ac12313df9489fdfbe80&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            // Display current temperature
            document.getElementById('current-temperature').textContent = `${data.main.temp} °C`;

            // Display current humidity
            document.getElementById('current-humidity').textContent = `${data.main.humidity}%`;

            // Display current weather description and icon
            const weatherDescription = `${data.weather[0].main} - ${data.weather[0].description}`;
            const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById('current-weather').textContent = weatherDescription;
            document.getElementById('weather-icon').src = weatherIcon;
            document.getElementById('weather-icon').alt = "Weather Icon";

            // Display temp-max message
            const tempMax = `${data.main.temp_max} °C`;
            document.getElementById('temp-max').textContent = `High temperature today: ${tempMax}`;

            // Show closeable message
            const message = document.getElementById('message');
            message.style.display = 'block';

            // Close message when close button is clicked
            document.getElementById('close-btn').addEventListener('click', () => {
                message.style.display = 'none';
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    fetch(tomorrowUrl)
        .then(response => response.json())
        .then(data => {
            // Find tomorrow's weather at 15:00 (3:00pm)
            const tomorrowData = data.list.find(item => item.dt_txt.includes('15:00:00'));

            // Display tomorrow's temperature at 15:00
            document.getElementById('tomorrow-temperature').textContent = `${tomorrowData.main.temp} °C`;
        })
        .catch(error => {
            console.error('Error fetching tomorrow weather data:', error);
        });
});