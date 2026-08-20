import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please enter a valid city name.");
        }

        throw new Error("Unable to fetch weather data.");
      }

      const data = await response.json();

      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
      };

      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="weather-container">

        <div className="title-section">
          <p className="subtitle">WEATHER APPLICATION</p>
          <h1>Check the Weather 🌤️</h1>
          <p>
            Search for any city and get real-time weather information.
          </p>
        </div>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={searchWeather}
        />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {weather && !loading && (
          <WeatherCard weather={weather} />
        )}

        {!weather && !loading && !error && (
          <div className="empty-state">
            <div className="cloud-icon">☁️</div>
            <h3>Search for a city</h3>
            <p>
              Enter a city name above to see the current weather.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;