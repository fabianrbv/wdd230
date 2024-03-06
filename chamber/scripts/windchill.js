// windchill.js

function calculateWindChillFactor(temperature, windSpeed) {
    // Formula for wind chill factor
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

function calculateWindChill() {
    // Get values from form
    const temperature = parseFloat(document.getElementById('temperature').value);
    const windSpeed = parseFloat(document.getElementById('windSpeed').value);

    // Check if inputs are valid numbers
    if (isNaN(temperature) || isNaN(windSpeed)) {
        alert("Please enter valid numbers for temperature and wind speed.");
        return;
    }

    // Check values of temperature and windSpeed
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = calculateWindChillFactor(temperature, windSpeed);

        // Display the result
        document.getElementById('result').innerText = windChill.toFixed(2) + " °F";
    } else {
        alert("Please verify temperature is <= 50°F and wind speed is > 3.0 mph");
        document.getElementById('result').innerText = "N/A";
    }
}
