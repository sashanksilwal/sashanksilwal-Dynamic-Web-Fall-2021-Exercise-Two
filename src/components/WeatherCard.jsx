import React from "react";

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
      <p className="Cloudiness">Cloudiness: {cloudiness}</p>
      <p className="CurrentTemp">Temp: {currentTemp}</p>
      <p>HighTemp: {highTemp}</p>
      <p>Humidity: {humidity}</p>
      <p>LowTemp: {lowTemp}</p>
      <p>WeatherType: {weatherType}</p>
      <p>WindSpeed: {windSpeed}</p>
    </section>
  );
}

export default WeatherCard;
