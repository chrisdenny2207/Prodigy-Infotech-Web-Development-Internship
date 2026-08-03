const apiKey = "9446be09e68e4b1bb9a61223260707";

function displayWeather(data){

document.getElementById("city").innerHTML =
data.location.name + ", " + data.location.country;

document.getElementById("temp").innerHTML =
data.current.temp_c + " °C";

document.getElementById("condition").innerHTML =
data.current.condition.text;

document.getElementById("feels").innerHTML =
"Feels Like : " + data.current.feelslike_c + " °C";

document.getElementById("humidity").innerHTML =
"Humidity : " + data.current.humidity + "%";

document.getElementById("wind").innerHTML =
"Wind Speed : " + data.current.wind_kph + " km/h";

document.getElementById("icon").src =
"https:" + data.current.condition.icon;

}

async function getWeather(city){

const url =
`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

const response = await fetch(url);

const data = await response.json();

displayWeather(data);

}

function getWeatherByCity(){

const city =
document.getElementById("cityInput").value;

getWeather(city);

}

function getLocationWeather(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat = position.coords.latitude;

const lon = position.coords.longitude;

getWeather(lat + "," + lon);

}

);

}
else{

alert("Geolocation not supported.");

}

}