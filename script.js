const apiKey = 'YOUR_API_KEY'; // Replace with your API key

async function getWeather() {
  const city = document.getElementById('city-input').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      alert('City not found');
      return;
    }
    const data = await response.json();

    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('weather-result').classList.remove('hidden');
  } catch (error) {
    alert('Error fetching weather data');
    console.error(error);
  }
}
