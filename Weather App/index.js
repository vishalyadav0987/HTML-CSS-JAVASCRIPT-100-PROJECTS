const searchBox = document.querySelector("#search");
const searchIcon = document.querySelector(".search-icon i");
const weatherImg = document.querySelector(".img-box img");
const countryName = document.querySelector(".country-name");
const bottom = document.querySelector(".bottom");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const temperature = document.querySelector(".temperature");
let data;

const API_KEY = "c22520188f4712fef8a1d1a79777a14a";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const fetchApi = async (city) => {
    const response = await fetch(API_URL + `&q=${city}` + `&appid=${API_KEY}`);

    if (response.status == 404) {
        alert("City not found");
    }
    else {
        data = await response?.json();
        console.log(data);
        
        const weatherType = data.weather[0].main;
        weatherImg.src = `imgs/${weatherType === 'Haze' ? "Clouds" : weatherType}.png`
        countryName.innerHTML = `${data.name}`
        humidity.innerHTML = `${data.main.humidity}%`
        windSpeed.innerHTML = `${data.wind.speed} Km/h`
        temperature.innerHTML = `${Math.floor(data.main.temp)}&deg;c`
        bottom.style.display = "flex";
        bottom.style.height = "100%";
        searchBox.value = "";
    }

};


searchIcon.addEventListener("click", () => {
    fetchApi(searchBox.value);
    
})



