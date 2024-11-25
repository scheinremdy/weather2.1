document.getElementById("getWeatherBtn").addEventListener("click", async () => {
    const cityName = document.getElementById("cityInput").value;
    const apiKey = "95e6e13f56fa93bf3300e4a6844dc074"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        // Log URL to verify it's correct
        console.log("Fetching data from: ", apiUrl);

        const response = await fetch(apiUrl);
        
        // Check if the response is okay (status 200)
        if (!response.ok) {
            throw new Error(`City not found: ${cityName}. Please try again.`);
        }
        
        const data = await response.json();
        
        // Log the raw data to see the structure
        console.log("Weather data received:", data);

        // If the data is valid, display weather information
        if (data && data.name) {
            document.getElementById("weatherOutput").innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            throw new Error("Error: Unable to retrieve weather data.");
        }
    } catch (error) {
        // Display error in the HTML and log it to console
        document.getElementById("weatherOutput").innerHTML = `
            <p style="color: red;">${error.message}</p>
        `;
        console.error("Error:", error);
    }
});
