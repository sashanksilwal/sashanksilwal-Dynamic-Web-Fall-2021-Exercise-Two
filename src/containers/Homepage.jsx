import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import { API_KEY } from "../components/API_KEY";

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
      currentTemp: Math.round(weatherData.main.temp),
      highTemp: Math.round(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: weatherData.main.temp_min,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main>
      <header>
        <nav className="Navigation">
          <a
            href="/?city=California"
            className={city === "California" && "Active"}
          >
            California
          </a>

          <a
            href="/?city=Kathmandu"
            className={city === "Kathmandu" && "Active"}
          >
            Kathmandu
          </a>
          <a
            href="/?city=New%20York"
            className={city === "New York" && "Active"}
          >
            New York
          </a>
          <a href="/?city=Paris" className={city === "Paris" && "Active"}>
            Paris
          </a>

          <a href="/?city=Tokyo" className={city === "Tokyo" && "Active"}>
            Tokyo
          </a>
        </nav>
      </header>
      <p className="City">{city}</p>
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
