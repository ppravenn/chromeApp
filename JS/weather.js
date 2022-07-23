const API_KEY="2ff6054947e9ea0e006284d48eb9f738";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data=>{
       const weather = document.querySelector("#weather span:first-child")
       const city = document.querySelector("#weather span:last-child")
       weather.innerText=`날씨: ${data.weather[0].main} 현재온도:${data.main.temp}`;
       city.innerText=data.name;
       
    });
}
function ongeoError(){
    alert("접근이 불가합니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, ongeoError)