const container = document.getElementById("container");

const aarauLatitude = 47.390434;
const aarauLongitude = 8.0457015;

fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${aarauLatitude}&longitude=${aarauLongitude}&current_weather=true`
)
  .then((response) => response.json())
  .then((json) => {
    roundedTemperature = Math.round(json.current_weather.temperature);

    container.innerHTML = `
<div class="location"><i class="fa-solid fa-location-dot"></i><span class="location-text">Aarau</span></div>
<img src="" class="weather-img" id="weatherImg">
<div class="weather-box">
    <div class="temperature" id="temperature">${roundedTemperature}°C</div>
    <div class="description" id="description"></div> 
</div>
<div class="weather-details">
    <div class="wind-direction">
        <i class="fa-solid fa-water"></i>
        <div class="text">
            <span id="wind-direction">${json.current_weather.winddirection}°C</span>
            <p>Wind Richtig</p>
        </div>
    </div>
    <div class="wind-speed">
        <i class="fa-solid fa-wind"></i>
        <div class="text">
            <span id="wind-speed">${json.current_weather.windspeed}Km/h</span>
            <p>Wind Gschwindigkeit</p>
        </div>
    </div>
</div> 
`;
    const image = document.getElementById("weatherImg");
    const desc = document.getElementById("description");
    switch (json.current_weather.weathercode) {
      case 0:
      case 1:
      case 2:
      case 3:
        image.src = "images/clear.png";
        desc.innerHTML = `Klar und Dütlich`;

        break;
      case 45:
      case 48:
        image.src = "images/cloud.png";
        desc.innerHTML = `Wolchig`;
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 80:
      case 81:
      case 82:
        image.src = "images/rain.png";
        desc.innerHTML = `Rägnerisch`;
        break;
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
      case 95:
      case 96:
      case 99:
        image.src = "images/snow.png";
        desc.innerHTML = `Schnee`;
        break;
      default:
        document.getElementById("weatherImg").src = "";
        break;
    }
  });

/* <div class="location"><i class="fa-solid fa-location-dot"></i><span class="location-text">Frick</span></div>
<img src="" class="weather-img" id="weatherImg">
<div class="weather-box">
    <div class="temperature" id="temperature"></div>
    <div class="description" id="description"></div> 
</div>
<div class="weather-details">
    <div class="wind-direction">
        <i class="fa-solid fa-water"></i>
        <div class="text">
            <span id="wind-direction"></span>
            <p>Wind Richtig</p>
        </div>
    </div>
    <div class="wind-speed">
        <i class="fa-solid fa-wind"></i>
        <div class="text">
            <span id="wind-speed"></span>
            <p>Wind Gschwindigkeit</p>
        </div>
    </div>
</div>  */
