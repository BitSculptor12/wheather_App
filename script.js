const apikey="6b7255a6c0eab2254cd6268297eec177";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
const response=await fetch(apiurl + city  + `&appid=${apikey}`);
var data=await response.json();

if(response.status==404){
document.querySelector(".error").style.display="block";
document.querySelector(".weather").style.display="none";
}
else{
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr ";
if(data.weather[0].main=="cloud"){
weatherIcon.src="images/images/clouds.png" 
}
else if(data.weather[0].main=="clear"){
weatherIcon.src="images/images/clear.png";
}
else if(data.weather[0].main=="Rain"){
weatherIcon.src="images/images/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
weatherIcon.src="images/images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
weatherIcon.src="images/images/mist.png"
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
}



}

searchBtn.addEventListener("click",()=>{
checkweather(searchBox.value);
})