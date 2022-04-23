import { useState } from "react";

import { Form } from "../../organisms/Form/Form";
import { Result } from "../../organisms/Result/Result";
import { Title } from "../../organisms/Title/Title";

export const Top = () => {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=f90c2b6ca2714b188c975827222304&q=London&aqi=no"
    ).then((res) => res.json().then((data) => console.log(data)));
  };
  return (
    <>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result />
    </>
  );
};
