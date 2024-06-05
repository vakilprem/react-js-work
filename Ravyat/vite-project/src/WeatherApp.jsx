import React, { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const API_KEY = 'abc4d6012bec9d73a15370c13c32b86b';

  const fetchData = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetchData(city);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {weatherData && (
  <div>
    <h2>{weatherData.name}</h2>
    <p>Temperature: {weatherData.main.temp} °C</p>
    <p>Feels like: {weatherData.main.feels_like} °C</p>
    <p>Minimum Temperature: {weatherData.main.temp_min} °C</p>
    <p>Maximum Temperature: {weatherData.main.temp_max} °C</p>
    <p>Pressure: {weatherData.main.pressure} hPa</p>
    <p>Humidity: {weatherData.main.humidity}%</p>
    <p>Weather: {weatherData.weather[0].description}</p>
    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    <p>Wind Direction: {weatherData.wind.deg}°</p>
    <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
  </div>
)}

    </div>
  );
}

export default WeatherApp;
