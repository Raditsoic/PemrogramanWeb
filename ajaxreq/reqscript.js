function getWeather() {
    const apiKey = 'a63f9ce7112129d3f4a1fd2d1738e3f0';
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main;
            const temperature   = (data.main.temp - 273).toFixed(2);
            const wind = data.wind.speed;

            document.getElementById('responseWeather').textContent = weather;
            document.getElementById('responseTemperature').textContent = temperature;
            document.getElementById('responseWind').textContent = wind;

            document.getElementById('weatherInfo').style.display = 'block';
            document.getElementById('temperatureInfo').style.display = 'block';
            document.getElementById('windInfo').style.display = 'block';
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

function getSurabaya()
{
    const apiKey = 'a63f9ce7112129d3f4a1fd2d1738e3f0';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Surabaya&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main;
            const temperature   = (data.main.temp - 273).toFixed(2);
            const wind = data.wind.speed;

            document.getElementById('weatherSurabaya').textContent = weather;
            document.getElementById('temperatureSurabaya').textContent = temperature;
            document.getElementById('windSurabaya').textContent = wind;
        })

        .catch(error => {
            console.error("Error fetching Surabaya weather");
        });
}

function getTangerang()
{
    const apiKey = 'a63f9ce7112129d3f4a1fd2d1738e3f0';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Tangerang&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main;
            const temperature   = (data.main.temp - 273).toFixed(2);
            const wind = data.wind.speed;

            document.getElementById('weatherTangerang').textContent = weather;
            document.getElementById('temperatureTangerang').textContent = temperature;
            document.getElementById('windTangerang').textContent = wind;
        })

        .catch(error => {
            console.error("Error fetching Tangerang weather");
        });
}

function getBalikpapan()
{
    const apiKey = 'a63f9ce7112129d3f4a1fd2d1738e3f0';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Balikpapan&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main;
            const temperature   = (data.main.temp - 273).toFixed(2);
            const wind = data.wind.speed;

            document.getElementById('weatherBalikpapan').textContent = weather;
            document.getElementById('temperatureBalikpapan').textContent = temperature;
            document.getElementById('windBalikpapan').textContent = wind;
        })

        .catch(error => {
            console.error("Error fetching Balikpapan weather");
        });
}

getSurabaya();
getTangerang();
getBalikpapan();