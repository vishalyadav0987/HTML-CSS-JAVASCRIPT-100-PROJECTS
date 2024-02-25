let inputField = document.querySelector("#input");
let btn = document.querySelector('.btn');
let resultTemp = document.querySelector(".result-temp");
let weatherDesc = document.querySelector(".weather-detail");
let weatherVideo = document.getElementById("weatherVideo");

btn.addEventListener('click', () => {
    let SelectType = document.getElementById('SelectType').value;
    // console.log(SelectType);
    // console.log(inputField.value);
    if (SelectType == 'cel') {
        const feherenhite = ((inputField.value * (9 / 5)) + 32);
        resultTemp.innerHTML = `${feherenhite.toFixed(1)}°  Fahrenheit`;
        if (feherenhite <= 32) {
            weatherDesc.innerHTML = "Freezing: Temperatures below freezing point, leading to the possibility of ice and snow.";
            weatherVideo.src = "https://img.pikbest.com/10/09/24/49VpIkbEsT5Uf.mp4";
            // weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/15 20.mp4";

        }
        else if (feherenhite > 32 && feherenhite <= 50) {
            weatherDesc.innerHTML = "Cold: Cold temperatures, requiring heavier clothing such as coats, scarves, and gloves.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/cold 2-7.mp4";
        }
        else if (feherenhite > 50 && feherenhite <= 59) {
            weatherDesc.innerHTML = "Chilly: Cooler weather, and most people would need a jacket or sweater.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/chilly.mp4";
        }
        else if (feherenhite > 59 && feherenhite <= 68) {
            weatherDesc.innerHTML = "Cool: Cool temperatures, may require a light jacket or sweater for some individuals.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/chilly.mp4";
        }
        else if (feherenhite > 68 && feherenhite <= 77) {
            weatherDesc.innerHTML = "Mild or Comfortable: Generally considered mild and comfortable for most people.";
            weatherVideo.src = "https://pic.pikbest.com/18/12/00/753888piCkmr.mp4";
        }
        else if (feherenhite > 77 && feherenhite <= 103) {
            weatherDesc.innerHTML = "Warm: Warm temperatures, often associated with pleasant and comfortable weather.";
            weatherVideo.src = "https://static.vecteezy.com/system/resources/previews/007/659/020/mp4/blue-ocean-sand-beach-and-water-surface-texture-foamy-waves-with-sky-and-clouds-beautiful-tropical-beach-amazing-sandy-coastline-with-white-sea-waves-nature-seascape-and-summer-concept-free-video.mp4";
        }
        else if (feherenhite > 103 && feherenhite < Infinity) {
            weatherDesc.innerHTML = "Hot: This is typically considered hot weather, and people may find it uncomfortable without proper cooling.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/heat.mp4";
        }
    }
    else if (SelectType == 'feh') {
        const celsius = ((inputField.value - 32) * (5 / 9));
        resultTemp.innerHTML = `${celsius.toFixed(1)}° celsius`;
        if (celsius <= 0) {
            weatherDesc.innerHTML = "Freezing: Temperatures below freezing point, leading to the possibility of ice and snow.";
            weatherVideo.src = "https://img.pikbest.com/10/09/24/49VpIkbEsT5Uf.mp4";
            // weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/15 20.mp4";

        }
        else if (celsius > 1 && celsius <= 10) {
            weatherDesc.innerHTML = "Cold: Cold temperatures, requiring heavier clothing such as coats, scarves, and gloves.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/cold 2-7.mp4";
        }
        else if (celsius > 10 && celsius <= 15) {
            weatherDesc.innerHTML = "Chilly: Cooler weather, and most people would need a jacket or sweater.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/chilly.mp4";
        }
        else if (celsius > 15 && celsius <= 20) {
            weatherDesc.innerHTML = "Cool: Cool temperatures, may require a light jacket or sweater for some individuals.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/chilly.mp4";
        }
        else if (celsius > 20 && celsius <= 25) {
            weatherDesc.innerHTML = "Mild or Comfortable: Generally considered mild and comfortable for most people.";
                weatherVideo.src = "https://pic.pikbest.com/18/12/00/753888piCkmr.mp4";
        
        }
        else if (celsius > 25 && celsius <= 39) {
            weatherDesc.innerHTML = "Warm: Warm temperatures, often associated with pleasant and comfortable weather.";
            weatherVideo.src = "https://static.vecteezy.com/system/resources/previews/007/659/020/mp4/blue-ocean-sand-beach-and-water-surface-texture-foamy-waves-with-sky-and-clouds-beautiful-tropical-beach-amazing-sandy-coastline-with-white-sea-waves-nature-seascape-and-summer-concept-free-video.mp4";
        }
        else if (celsius > 39 && celsius < Infinity) {
            weatherDesc.innerHTML = "Hot: This is typically considered hot weather, and people may find it uncomfortable without proper cooling.";
            weatherVideo.src = "/JavaScriptProjects/TempratureConverterProject/heat.mp4";
        }
    }
})
let videoScreen = document.querySelector("video");
videoScreen.addEventListener('load', () => {
    videoScreen.play();
})

