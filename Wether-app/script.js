// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector('form');
const searchCity = document.querySelector('#city');
const weatherData = document.querySelector('.data');

// input data
form.addEventListener('submit', (event) => {
    event.preventDefault();
    getData(searchCity.value);
});

// Fetch data.
async function getData(city) {
    weatherData.innerHTML='Loading...'
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    showData(data);
}

function showData(data) {

   
    if (data.cod == "404") {
        weatherData.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weatherData.innerHTML = `
    <div class="maindata">
                      <span> <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></span>
                       <span class="same">${data.weather[0].description}</span>
                     </div>
    
    <div class="temperature same">${data.main.temp}°C</div>
                      
                      <div class="wind same">Wind: ${data.wind.speed} m/s</div>
                      <div class="humidity same">Humidity: ${data.main.humidity}%</div>`;
}




