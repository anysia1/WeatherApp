async function getWeatherData() {
    try {
        const response = await fetch('your_weather_api_endpoint');
        const data = await response.json();

        // Update sunrise and sunset times
        document.getElementById('sunrise').textContent = data.sunrise;
        document.getElementById('sunset').textContent = data.sunset;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the function when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    getWeatherData();
});