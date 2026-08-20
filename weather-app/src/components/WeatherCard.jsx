function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <div>
          <h2>{weather.city}</h2>
          <p>{weather.country}</p>
        </div>

        <div className="weather-icon">
  {weather.condition.toLowerCase().includes("clear") && "☀️"}

  {weather.condition.toLowerCase().includes("cloud") && "☁️"}

  {weather.condition.toLowerCase().includes("rain") && "🌧️"}

  {weather.condition.toLowerCase().includes("storm") && "⛈️"}

  {weather.condition.toLowerCase().includes("snow") && "❄️"}

  {weather.condition.toLowerCase().includes("mist") && "🌫️"}

  {weather.condition.toLowerCase().includes("haze") && "🌫️"}
</div>
      </div>

      <div className="temperature">
        {Math.round(weather.temperature)}°C
      </div>

      <p className="condition">
        {weather.condition}
      </p>

      <div className="weather-details">
        <div className="detail">
          <span>💧</span>
          <div>
            <small>Humidity</small>
            <strong>{weather.humidity}%</strong>
          </div>
        </div>

        <div className="detail">
          <span>💨</span>
          <div>
            <small>Wind Speed</small>
            <strong>{weather.windSpeed} m/s</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;