const apiKey = "4d8fb5b93d4af21d66a2948710284366";

function findWeather() {
    var city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(response => response.json())
        .then(data => {
            var { main, name, sys, weather } = data;
            var temp = data.main.temp;
            var errorMsg = document.getElementById("errorMsg");
            var weatherCard = document.getElementById("weatherCard");
            errorMsg.style.visibility = "hidden";
            weatherCard.style.visibility = "visible";
            document.getElementById("cityTemp").innerHTML = `${temp} &#8451;`;
            document.getElementById("cityText").innerHTML = city;
            document.getElementById("cityWeather").innerHTML = data.weather[0].main;
            
            console.log(data);
        }).catch(() => {
            var errorMsg = document.getElementById("errorMsg");
            var weatherCard = document.getElementById("weatherCard");
            errorMsg.style.visibility = "visible";
            weatherCard.style.visibility = "hidden";
        });
}
