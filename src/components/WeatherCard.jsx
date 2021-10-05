import React from "react";
import WeatherImage from "./WeatherImage";
function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <div className="CardSection">
        <div className="ImageWeatherWrapper">
          <WeatherImage weatherType={weatherType} />
        </div>

        <p className="currentTemp">
          Current Temp: <strong>{currentTemp}°</strong>
        </p>
      </div>

      <div className="CardSection">
        <p className="cloudiness">
          Cloudiness: <strong>{cloudiness}</strong>
        </p>

        <p className="highTemp">
          HighTemp: <strong>{highTemp}</strong>
        </p>
        <p className="humidity">
          Humidity: <strong>{humidity}</strong>
        </p>
        <p className="lowTemp">
          LowTemp: <strong>{lowTemp}</strong>
        </p>
        <p className="weatherType">
          WeatherType: <strong>{weatherType}</strong>
        </p>
        <p className="windSpeed">
          WindSpeed: <strong>{windSpeed}</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
