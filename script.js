// Event listener for the button
document.getElementById("getWeather").addEventListener("click", getWeather);

// Function to get the weather data
function getWeather() {
    const city = document.getElementById("city").value; // Get the city entered by the user
    const apiKey = 'your_api_key'; // Replace with your actual API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data from OpenWeatherMap API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Successfully fetched data
                const weather = `
                    <h2>Weather in ${data.name}</h2>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                `;
                document.getElementById("weatherInfo").innerHTML = weather; // Display weather data
            } else {
                // Error handling for invalid city
                document.getElementById("weatherInfo").innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data. Please try again later.</p>`;
        });
}
