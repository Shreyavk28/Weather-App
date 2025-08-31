import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureQuarter,
  faTint,
  faWind,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/weather?city=${city}`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Error fetching weather data");
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="weather-container"
    >
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>
            Temperature{" "}
            <FontAwesomeIcon
              icon={faTemperatureQuarter}
              style={{ marginRight: "8px" }}
            />
            {""}: {weather.main.temp}°C
          </p>
          <p>
            Condition{" "}
            <FontAwesomeIcon icon={faCloud} style={{ marginRight: "8px" }} />:{" "}
            {weather.weather[0].description}
          </p>
          <p>
            Humidity{" "}
            <FontAwesomeIcon icon={faTint} style={{ marginRight: "8px" }} />:{" "}
            {weather.main.humidity}%
          </p>
          <p>
            Wind Speed{" "}
            <FontAwesomeIcon icon={faWind} style={{ marginRight: "8px" }} />:{" "}
            {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
