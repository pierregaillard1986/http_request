$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            function reqListener() {
                var meteo = JSON.parse(this.responseText);
                var temperature = meteo.main.temp;
                var pressionAtmospherique = meteo.main.pressure;
                var tauxHumidite = meteo.main.humidity;
                var temperatureMin = meteo.main.temp_min;
                var temperatureMax = meteo.main.temp_max;
                var vitesseVent = meteo.wind.speed;
                document.getElementById('meteo').innerHTML = "Bonjour, <br> la temperature est de " + temperature + " degré Celcius" + " <br> avec une pressions atmosphérique de " + pressionAtmospherique + " Hpa" + "<br>un taux d'humidité de " + tauxHumidite + " %" + "<br> une temperature maximale de " + temperatureMax + " degré Celcius" + " et minimale de " + temperatureMin + " degré Celcius" + "<br>un vent de " + vitesseVent + " km/h";
            }

            var req = new XMLHttpRequest();
            req.onload = reqListener;
            req.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=ff4a0a5c6bae2becf6bfc37ef0da3684&units=metric");
            req.send();
        });
    }
});
