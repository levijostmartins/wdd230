document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e0642907979cb565c4a81f8ef44b1ca";
    const city = "Imbituba";  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weather-location").textContent = data.name;
            document.getElementById("weather-temp").textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById("weather-description").textContent = data.weather[0].description;
            document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});

