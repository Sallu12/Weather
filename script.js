const apiKey = "a57eba55a229e1a20571e79c32a645d9"; // Replace with your actual API key from OpenWeatherMap

function getWeather(event) {
  event.preventDefault();
  const locationInput = document.getElementById("location-input");
  const city = document.getElementById("location-input").value;
  const weatherData = document.getElementById("weather-data");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      weatherData.innerHTML = `🌡️ Temperature: ${temp}°C<br>🌥️ Condition: ${description}`;
      locationInput.value = "";
    })
    .catch(error => {
      weatherData.innerHTML = `Error: ${error.message}`;
      locationInput.value = "";
    });
}

document.getElementById("location-form").addEventListener("submit", getWeather);