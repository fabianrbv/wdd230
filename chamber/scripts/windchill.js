function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        document.getElementById("wind-chill").textContent = Math.round(windChill) + " °F";
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

var temperatureValue = parseFloat(document.getElementById("temperature").textContent);
var windSpeedValue = parseFloat(document.getElementById("wind-speed").textContent);

calculateWindChill(temperatureValue, windSpeedValue);