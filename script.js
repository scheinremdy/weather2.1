const apiKey = "0dc2957f911be0df7a060c2992526cba"; // Replace with your OpenWeatherMap API key
const city = "London"; // Replace with your city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("weather").innerText = 
      `The weather in ${data.name} is ${data.main.temp}°C with ${data.weather[0].description}.`;
  })
  .catch(error => {
    console.error(error);
    document.getElementById("weather").innerText = "Unable to fetch weather data.";
  });

