// script.js
// OpenWeatherMap API Key
const apiKey = '3d897dc5871927393ea595d48911f103';

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
  const location = document.getElementById('locationInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  // Check if location input is not empty
  if (location.trim() !== '') {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch weather data');
        }
      })
      .then(data => {
        displayWeather(data);
        changeBackgroundColor(data.weather[0].main);
      })
      .catch(error => displayError(error));
  } else {
    displayError('Please enter a city name');
  }
}

// Function to display weather data
function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  const weatherCondition = data.weather[0].description;
  weatherInfo.innerHTML = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Feels like: ${data.main.feels_like}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Weather Condition: ${data.weather[0].description}</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

// Function to change background color based on weather condition
function changeBackgroundColor(weatherCondition) {
  const body = document.body;
  switch (weatherCondition) {
    case 'Clear Sky':
      body.style.backgroundImage = 'url("clearsky.jpg")';
      break;
    case 'Clouds':
      body.style.backgroundImage = 'url("cloud.jpg")';
      break;
    case 'Rain':
      body.style.backgroundImage = 'url("rain.jpg")';
      break;
    case 'Snow':
      body.style.backgroundImage = 'url("clearsky.jpg")';
      break;
    case 'Thunderstorm':
      body.style.backgroundImage = 'url("thunder.jpg")';
      break;
    case 'Drizzle':
      body.style.backgroundImage = 'url("drizzle.jpg")';
      break;
    case 'Mist':
      body.style.backgroundImage = 'url("mist.jpg")';
      break;
    case 'Haze':
      body.style.backgroundImage = 'url("haze.jpg")';
      break;
    default:
      body.style.backgroundImage = 'url("sky.avif")';
      break;
  }
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
}

// Function to display error message
function displayError(message) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <p style="color: red;">${message}</p>
  `;
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  button.addEventListener('click', fetchWeather);
});