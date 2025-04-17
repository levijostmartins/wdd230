const apiKey = 'e9a876ac1d2f1361e5ef765c3c5bbbf6';
const lat = -28.2284; // Imbituba, SC
const lon = -48.6659;

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Weather fetch error:", error);
    document.querySelector("#weather-location").textContent = "Unable to load weather";
  }
}

function displayWeather(data) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/w/${icon}.png`;

  document.querySelector("#weather-location").textContent = "Imbituba, SC";
  document.querySelector("#weather-temp").textContent = `${temp}°C`;
  document.querySelector("#weather-description").textContent = desc;
  const iconImg = document.querySelector("#weather-icon");
  iconImg.src = iconURL;
  iconImg.alt = desc;
}

getWeather();
