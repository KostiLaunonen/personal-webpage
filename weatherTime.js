async function fetchWeather() {
    const apiKey = '491c5c84f199863b2f2ef58fdf7cd489';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Oulu&appid=' + apiKey + '&units=metric';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const weatherDescription = data.weather[0].description.toLowerCase().trim();
        const weatherEmoji = getWeatherEmoji(weatherDescription);

        //console.log(weatherDescription);
        document.getElementById('weather').innerHTML = `${temp}°C ${weatherEmoji}`;
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

function getWeatherEmoji(description) {
    switch(description) {
        case 'clear sky':
            return '☀️';
        case 'few clouds':
            return '🌤️';
        case 'scattered clouds':
            return '☁️';
        case 'broken clouds':
            return '🌥️';
        case 'overcast clouds':
            return '☁️';
        case 'rain':
            return '🌧️';
        case 'drizzle':
            return '🌦️';
        case 'thunderstorm':
            return '⛈️';
        case 'snow':
            return '❄️';
        case 'mist':
        case 'fog':
            return '🌫️';
        default:
            return '';
    }
}

async function fetchTime() {
    const apiUrl = 'https://worldtimeapi.org/api/timezone/Europe/Helsinki';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        const hours = dateTime.getHours().toString().padStart(2, '0');
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        document.getElementById('time').innerHTML = `${formattedTime}`;
    } catch (error) {
        console.error('Error fetching time:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchTime();
});
