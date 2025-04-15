const apiKey = 'e9a876ac1d2f1361e5ef765c3c5bbbf6';
const lat = -23.5505; 
const lon = -46.6333;
const weatherCard = document.querySelector(".card:nth-of-type(2)");

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Weather fetch error:", error);
  }
}

function displayWeather(data) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/w/${icon}.png`;

  weatherCard.innerHTML = `
    <h2>Information</h2>
    <p>SP, Brazil</p>
    <p><img src="${iconURL}" alt="${desc}"> ${temp}°C - ${desc}</p>
    <p>Page Visits: <span id="visits">0</span></p>
  `;
}

getWeather();
