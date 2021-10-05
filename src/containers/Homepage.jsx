import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";

// abstarct away url search params here to make it easier to use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function HomePage() {
  // URL search params
  // example: localhost:3000/?city=paris

  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  let query = useQuery();

  const API_KEY = "41c5e5cc45a2ad0060d4373aea5b1549";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          setWeatherData(response.data);
          console.log(response);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [URL, city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    console.log(weatherData);
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: weatherData.main.temp,
      highTemp: weatherData.main.temp_max,
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main>
      <header className="header">
        <p>
          <a href="/?city=Paris">Paris</a>
        </p>

        <p>
          <a href="/?city=Tokyo">Tokyo</a>
        </p>

        <input type="text"></input>
        <button>
          <a href="/?city=Tokyo">Tokyo</a>
        </button>
      </header>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default HomePage;
