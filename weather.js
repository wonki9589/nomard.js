const weather = document.querySelector(".js-weather");


const COORDS = 'coords';
const API_KEY = "852949a2f879f9d52db989fbd03b0562";

function getWheather(lat, lon)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json) {
        const temperture = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperture}'C  ${place}`;
    });
        
      
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitube = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitube,
        longitude
    };
    saveCoords(coordsObj);
    getWheather(latitube,longitude);
}

function handleGeoError(){
    console.log('cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWheather(parseCoords.latitube, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();