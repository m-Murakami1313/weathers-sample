import { useState } from "react";

export const Form = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=f90c2b6ca2714b188c975827222304&q=London&aqi=no"
    ).then((res) => res.json().then((data) => console.log(data)));
  };

  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
};
