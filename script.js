const apiKey = "95e6e13f56fa93bf3300e4a6844dc074"; 
function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const weatherElement = document.getElementById("weather");
      weatherElement.innerHTML = `
        <p><strong>${data.name}</strong></p>
        <p>${data.weather[0].description}</p>
        <p><strong>${data.main.temp}°C</strong></p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weather").innerText = "Error fetching weather data.";
    });
}
