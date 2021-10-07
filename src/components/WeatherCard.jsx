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
    <section
      className="WeatherCard"
      style={{ backgroundColor: `rgba(130,130,130,${cloudiness / 100})` }}
    >
      <div className="CardSectionWrapper">
        <div className="row">
          <div className="column">
            <div className="ImageWeatherWrapper">
              <WeatherImage weatherType={weatherType} />
            </div>

            <p className="currentTemp">
              Current Temp{" "}
              <strong className="currentTempText">{currentTemp}°</strong>
            </p>
          </div>

          <div className="column">
            <p className="data cloudiness">
              Cloudiness: <strong>{cloudiness}</strong>
            </p>
            <p className=" data humidity">
              Humidity: <strong>{humidity}</strong>
            </p>
            <p className=" data highTemp">
              HighTemp: <strong>{highTemp}</strong>
            </p>

            <p className=" data lowTemp">
              LowTemp: <strong>{lowTemp}</strong>
            </p>
            <p className="data weatherType">
              WeatherType: <strong>{weatherType}</strong>
            </p>
            <p className="data windSpeed">
              WindSpeed: <strong>{windSpeed}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;
