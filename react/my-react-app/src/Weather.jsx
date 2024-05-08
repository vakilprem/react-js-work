import React, { useEffect, useState } from "react";
import axios from "axios";
function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  function getWeather() {
    const apikey = "abc4d6012bec9d73a15370c13c32b86b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}`;

    axios.get(url).then((response) => {
      const data = response.data;
      console.log(data);
      setWeather(data);

      localStorage.setItem("location", data.name);
      localStorage.setItem("temp", data.main.temp.toString());
      localStorage.setItem("Deg", data.wind.deg);
    });
  }
  function handleKeyPress(event) {
    if (event == "Enter") {
      getWeather();
    }
  }
  useEffect(() => {
    const storedLocation = localStorage.getItem("location");
    const storedTemp = localStorage.getItem("temp");
    const storedDeg = localStorage.getItem("deg");

    console.log("Stored Location:", storedLocation);
    console.log("Stored Temp:", storedTemp);
    console.log("Stored Wind:", storedDeg);

    if (storedLocation && storedTemp && storedDeg) {
      setWeather(
        {
          name: storedLocation,
          main: { temp: parseFloat(storedTemp) },
          deg: { deg: parseFloat(storedDeg) },
        },
        []
      );
    }
  }, []);
  return (
    <div className="weather">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyPress={handleKeyPress}
      />
      <button className="btn-w" onClick={getWeather}>
        Get Weather
      </button>
      <br />
      <div className="w-t">
        {weather.name && <p>Location: {weather.name}</p>}
        {weather.weather && weather.weather[0] && (
          <p>Description: {weather.weather[0].description}</p>
        )}
        {weather.main && <p>Temperature: {Math.floor(weather.main.temp)}</p>}
        {weather.wind && <p>Wind Degree: {weather.wind.deg}</p>}
        {weather.main && (
          <p>Feels Like: {Math.floor(weather.main.feels_like)}</p>
        )}
      </div>
    </div>
  );
}

export default Weather;
