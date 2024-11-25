document.getElementById("getWeatherBtn").addEventListener("click", async () => {
    const cityName = document.getElementById("cityInput").value;
    const apiKey = "0dc2957f911be0df7a060c2992526cba"; //
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        // Fetch weather data
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`City not found: ${Dortmund}. Please try again.`);
        }

        const data = await response.json();

        // Update the UI with weather data
        document.getElementById("weatherOutput").innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("weatherOutput").innerHTML = `
            <p style="color: red;">${error.message}</p>
        `;
    }
});
